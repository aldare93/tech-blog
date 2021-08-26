const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/config');
const bcrypt = require('bcrypt');

class User extends Model { // Uses bcrypt to validate password
    checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}
User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [4],
        }
    }
}, { 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'User',
    hooks: {
        async beforeCreate(newUserData) { // Hashes password before creating student in table
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData; 
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await brcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    }
}
);

module.exports = User;
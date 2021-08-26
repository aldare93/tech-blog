const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/config');

class Post extends Model {}// Uses bcrypt to validate password

Post.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Post',
}
);

module.exports = Post;
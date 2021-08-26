const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/config');

class Comment extends Model {}// Uses bcrypt to validate password

Comment.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false, 
        primaryKey: true,
        autoIncrement: true
    },
    body: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, { 
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'Comment',
}
);

module.exports = Comment;
const User = require('./User');
const Comment = require('./Comment');
const Post = require('./Post');

Post.belongsTo(User, {
    foreignKey: 'userId'
});

Post.hasMany(Comment, {
    foreignKey: 'postId'
});

Comment.belongsTo(User, {
    foreignKey: 'userId'
});

module.exports = {User, Comment, Post};
const router = require('express').Router();
const {User, Post, Comment} = require('../models');

// Home routes 

// Log in page
router.get('/', (req, res) => {
    Post.findAll({
        include: [User],
    }) .then((res) => {
        const posts = res.map((post) => post.get({plain: true}))
        res.render('posts', {posts})
    }) 
});

// Sign up page
router.get('/create', (req, res) => {
    res.render('signup', {
        loggedIn: req.session.loggedIn,
        member: req.session.member,
    });
})

// new post page
router.get('/new', (req, res) => {
    res.render()
})

module.exports = router;

// Comment, post, user
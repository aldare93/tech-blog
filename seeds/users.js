const Blog = require('../models/Post');

const blogPosts = [
  {
    author: 'Alex',
    title: 'Hello world!',
    blog_text: 'This is my first blog post! Pretty stoked to be learning all this cool stuff.'
  }
];

const seedCategories = () => Course.bulkCreate(postData);

module.exports = seedCategories;

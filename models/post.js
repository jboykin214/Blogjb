const Sequelize = require('sequelize');
const sequelize = require('../db');
const User = require('./user');

const Post = sequelize.define('post', {
  title: {
    type: Sequelize.STRING
  },
  content: {
    type: Sequelize.TEXT
  },
  userId: {
    type: Sequelize.INTEGER
  }
});

Post.belongsTo(User);

module.exports = Post;
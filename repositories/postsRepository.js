'use strict';

var db = require('../models');

var repo = {};

repo.getPostById = function (id) {
    return db.posts.findById(id);
};

repo.getPostByTitle = function (title) {
    return db.posts.findOne({
	where: {
	    'title': title
	}
    });
};

repo.getAllPosts = function () {
    return db.posts.findAll({
    });
};

repo.deletePost = function (id) {
    return db.posts.destroy({
	where: {
	    id: id
	}
    });
};

repo.saveNewPost = function (newPost) {
    return db.posts.create(newPost);
};

module.exports = repo;
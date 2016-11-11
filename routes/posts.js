var express = require('express');
var expressJwt = require('express-jwt');
var router = express.Router();
var postsRepo = require('../repositories/postsRepository.js');

router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

router.delete('/:id', function (req, res, next) {
    var id = req.params.id;

    postsRepo.deletePost(id).then(function () {
	res.json({
	    result: 'Post was deleted'
	});
    }).catch(function (error) {
	return res.status(500).json({
	    message: 'Could not delete post'
	});
    })
});


router.get('/', function (req, res, next) {
    postsRepo.getAllPosts().then(function (posts) {
	if (posts) {
	    res.json(posts);
	} else {
	    res.json(null);
	}

    }).catch(function (error) {
	return res.status(500).json({
	    message: 'Could not retrieve posts'
	});
    });

});



router.post('/', function (req, res, next) {
    var title = req.body.title;
    var content = req.body.content;


    if (!title || !content) {
	return res.status(400).json({
	    message: 'Error title, content are all required!'
	});
    }

    var newPost = {
	title: title,
	content: content
    }

    postsRepo.saveNewPost(newPost).then(function () {
	res.json(newPost);
    }).catch(function (error) {
	return res.status(500).json({
	    message: 'Could not save post'
	});
    })
});



router.get('/:id', function (req, res, next) {
    postsRepo.getPostById(req.params.id)
	    .then(function (post) {
		if (!post) {
		    return res.status(500).json({
			message: 'Could not retrieve post w/ that id'
		    });
		}
		res.json(post);
	    })
	    .catch(function (err) {
		return res.status(404).json({message: 'Post not found'});
	    });
});

module.exports = router;

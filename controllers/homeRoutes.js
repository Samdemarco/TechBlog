const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

//RENDER HTML FOR HOMEPAGE
router.get('/', (req, res) => {

  Post.findAll({
    attributes: [
      'id',
      'content',
      'title',
      'createdAt'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'createdAt'],
        include: {
          model: User,
          attributes: ['name']
        }
      },
      {
        model: User,
        attributes: ['name']
      }
    ]
  })
    .then(dbPostData => {
      // pass a single post object into the homepage template
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('homepage', { posts, logged_in: req.session.logged_in });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//RENDER LOGIN PAGE (IF USER ALREADY LOGGED IN REDIRECT TO DASHBOARD)
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

//RENDER SIGNUP
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'content',
      'title',
      'createdAt'
    ],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'createdAt'],
        include: {
          model: User,
          attributes: ['name']
        }
      },
      {
        model: User,
        attributes: ['name']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', { post, logged_in: req.session.logged_in });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

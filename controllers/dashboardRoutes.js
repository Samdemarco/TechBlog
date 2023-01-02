const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//DASHBOARD DISPLAYING LOGGED IN USER POSTS 
router.get('/', withAuth, (req, res) => {
  Post.findAll({
    where: {
      //SESSION ID FOR USER
      user_id: req.session.user_id
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
      const posts = dbPostData.map(post => post.get({ plain: true }));
      res.render('dashboard', { posts, logged_in: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//RENDER HTML FOR EDIT PAGE
router.get('/edit/:id', withAuth, (req, res) => {
  Post.findOne({
  where: {
  id: req.params.id
  },
  attributes: ['id', 
              'content', 
              'title'
          ],
  include: [
  {
      model: User,
      attributes: ['name']
  },
  {
      model: Comment,
      attributes: ['id', 'comment_text', 'post_id', 'user_id'],
      include: {
      model: User,
      attributes: ['name']
      }
  }
  ]
})
  .then(dbPostData => {
  const post = dbPostData.get({ plain: true });
  res.render('edit-posts', { post , logged_in: true }); 
  })
  .catch(err => {
  console.log(err);
  res.status(500).json(err);
  });
});

//HTML RENDER FOR NEW POST
router.get('/newpost', (req, res) => {
res.render('new-posts');
});

module.exports = router;
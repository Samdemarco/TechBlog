const router = require('express').Router();
const { Post, User, Comment} = require('../../models');
const withAuth = require('../../utils/auth');
const sequelize = require('../../config/connection');

//GET ALL POSTS
router.get('/', (req, res) => {
    Post.findAll({
      attributes: ['id', 
                   'content',
                   'title',
                   'createdAt'
                ],
      //LIST BY LATEST
      order: [['createdAt','DESC']],
      // JOIN USER TABLE
      include: [
          //ATTACH USER NAME TO COMMENT 
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
          },
      ]
    }) 
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
  
});

//GET A SINGLE POST BY ID 
router.get('/:id', (req, res) => {
    Post.findOne({
      where: {
        id: req.params.id
      },
      attributes: ['id', 
                   'content', 
                   'title',
                   'createdAt'
                ],
      include: [
        {
          model: User,
          attributes: ['name']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'createdAt'],
          include: {
            model: User,
            attributes: ['name']
          }
        }
      ]
    })
      .then(dbPostData => {
        if (!dbPostData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
        res.json(dbPostData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

//CREATE A NEW POST
router.post('/', withAuth, (req, res) => {
    Post.create({ 
        title: req.body.title,
        content: req.body.content,
        user_id: req.session.user_id
    })
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err); 
        });
});

//UPDATE A POST
router.put('/:id', withAuth, (req, res) => {
    Post.update({
        title: req.body.title,
        content: req.body.content
      },
      {
        where: {
          id: req.params.id
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

//DELETE A POST 
router.delete('/:id', withAuth, (req, res) => {
    Post.destroy({
        where: {
            id: req.params.id 
        }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;
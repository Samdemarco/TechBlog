const router = require('express').Router();
const { User } = require('../../models');

//CREATE A NEW USER
router.post('/', async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.name = userData.name;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

//LOGIN
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email. Please try again!' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect password. Please try again!' });
      return;
    }

    //ONCE USER LOGS IN, SETUP SESSION
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res
        .status(200)
        .json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGOUT
router.post('/logout', (req, res) => {
  //DESTROY SESSION
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.put('/application', async (req, res) => {
  try {
    //FIND USER'S INFO BASED ON SESSION ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });
console.log("userData is: "+ userData);
    User.update(
      {
        applied_Jobs: req.body.job_id,
      },
      {
        where: {
          id: req.session.user_id,        
        },
    });
   
  } catch (err) {
    res.status(500).json(err);
  }

 
});

// Delete a user
router.delete('/delete', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.session.user_id,
      },
    });
    req.session.destroy(() => {
      res.status(204).end();
    });
  
    if (!userData) {
      res.status(404).json({ message: 'No User found with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

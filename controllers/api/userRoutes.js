const router = require('express').Router();
const { User } = require('../../models');

// api methow which iscreating a new user when he signes up
router.post('/', async (req, res) => {
  try {
    let entityToSave = Object.assign({}, req.body);

    if (entityToSave.languageLanguageId == "") {
      entityToSave.languageLanguageId = null;
    }
    const userData = await User.create(entityToSave);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login the user which already has the login and handle the error in case he wrote wrong credentials.
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});

// logout hte user
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
      req.session.logged_in = false;
      req.session.user_id = null;
    });
  } else {
    res.status(404).end();
  }
});

// a function to update the language of the tutor/student.
router.post('/updateLang', async (req, res) => {
  try {
    let languageId = req.body.languageId;
    let userId = req.session.user_id;

    if (userId == null || !req.session.logged_in) {
      res.status(403);
      return;
    }

    if (languageId == '') {
      languageId = null;
    }

    let user = await User.findByPk(req.session.user_id);
    // user.languageLanguageId = languageId;
    await user.update({languageLanguageId:languageId})
    res.status(200);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Gettin the students for us.

router.get('/students', async (req, res) => {
  try {
    let usersFromServer = await User.findAll();
    let studs = usersFromServer.filter(usr => usr.languageLanguageId == null);
    res.status(200).json(studs);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;

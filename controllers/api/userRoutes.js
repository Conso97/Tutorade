const router = require('express').Router();
const { User } = require('../../models');

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

// Getting the students for us.

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

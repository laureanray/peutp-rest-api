const User = require('./userModel');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const express = require('express');
const router = express.Router();


router.post('/signup', urlencodedParser, (req, res, next) => {
  const name = req.body.name;
    const user = User(req.body);
    user.save(function(err, docs) {
      if (err) {
        console.log(err);
        res.status(403).send({ STATUS: 'DUPLICATE ENTRY' });
      }
      if (docs === user) res.status(201).send({ STATUS: 'USER CREATED' });
    });
});

module.exports = router;



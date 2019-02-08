const User = require('./userModel');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false });
module.exports = app => {
  app.post('/user/signup', urlencodedParser, (req, res) => {
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
};

const User = require("./userModel");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const express = require("express");
const router = express.Router();

router.post("/signup", urlencodedParser, (req, res, next) => {
  const user = User(req.body);
  user.save(function(err, docs) {
    if (err) {
      if (err.name === "ValidationError") {
        res.status(400).send({ Message: "Validation Error" });
      } else if (err.name === "MongoError") {
        res.status(403).send({ Message: "Mongo Error" });
      }
    }
    if (docs === user) res.status(201).send({ Message: "User Created" });
  });
});

module.exports = router;

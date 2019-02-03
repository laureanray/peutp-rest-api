const User = require('./userModel');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: false});
module.exports = (app) => {
    app.post('/user/signup', urlencodedParser, (req, res) => {
        let data = User(req.body);    
        data.save(function(){
            res.status(201).send({STATUS: "USER CREATED"});
        }); 
    });
};      
var db = require("../models")
var passport = require('passport');


module.exports = function(app) {

    app.post("/api/affirmation", function(req, res){
        var newAffirmation = req.body
        db.Affirmation.create(newAffirmation).then(function(data){
            res.json(data)
        })
    })


    app.post("/api/todo", function(req, res){
        var newTodo = req.body
        db.ToDo.create(newTodo).then(function(data){
            res.json(data)
        })
    })

    // Register User
    app.post('/register', function (req, res) {
        console.log("hi")
        var newUser = new db.User({
            name: req.body.name,
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        });
        console.log(newUser)

        db.User.createUser(newUser, function (err, user) {
            if (err) throw err;
            res.send(user).end()
        });

    });

    // Endpoint to login
    app.post('/login',
        passport.authenticate('local'),
        function (req, res) {
            res.send(req.user);
        }
    );

    // Endpoint to get current user
    app.get('/user', function (req, res) {
        res.send(req.user);
    })


    // Endpoint to logout
    app.get('/logout', function (req, res) {
        req.logout();
        res.send(null)
    });

}

 
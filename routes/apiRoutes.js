var db = require("../models")
var passport = require('passport');
/* var API = require("") */


module.exports = function(app) {


    /* Affirmation create - read - update */

    app.post("/api/affirmation", function(req, res){
        var newAffirmation = req.body;
        newAffirmation.userId = req.session.passport.user
        db.Affirmation.create(newAffirmation).then(function(data){
            res.json(data)
        });
    }),

     app.get("/api/affirmation/get", function(req, res){
        console.log(req.session.passport.user)
       db.Affirmation.find({userId: req.session.passport.user}).then(function(data){
           console.log(data)
           res.json(data);
       })
    
    }),

    app.put("api/affirmation/update/", function(req, res){
        let update = req.body;
        let id = req.params.id;
        db.user.updateOne({_id: id}, update).then(function(data){
            res.json(data);
        })
    }),

    /* Todo create - read - update */

    app.post("/api/todo", function(req, res){
        var newTodo = req.body
        newTodo.userId = req.session.passport.user
        db.ToDo.create(newTodo).then(function(data){
            res.json(data)
        })
    }),

     app.get("/api/get", function(req, res){
        console.log(req.session.passport.user)
       db.ToDo.find({userId: req.session.passport.user}).then(function(todo){
           console.log(todo)
           res.json(todo);
       })
    
    }),

    app.put("api/todo/update/:id", function(req, res){
        let update = req.body;
        let id = req.params.id;
        db.user.updateOne({_id: id}, update).then(function(todo){
            res.json(todo);
        })
    }),


    /* Passport --- */

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
            console.log(req.session.passport)
            res.send(req.user);
        }
    );

    // Endpoint to get current user --- 
    app.get('/user', function (req, res) {
        res.send(req.user);
    })


    // Endpoint to logout
    app.get('/logout', function (req, res) {
        req.logout();
        res.send(null)
    });

}

 
const User = require("../models/user");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");

module.exports.signup = ( (req, res, next) => {
    let error = validationResult( req );
    if(!error.isEmpty()) {
        const err = new Error("Validation failed");
        err.data = error.array();
        return res.json({
            message: err.message,
            error: err.data
        });
    }

    const fullname = req.body.fullname;
    const username = req.body.email;
    const password = req.body.password;

    User.register(new User(
        {
            fullname,
            username
        }), password, (error, user) => {
            if(error) {
                const err = new Error("Failed to create user");
                console.log(error);
                err.statusCode = 500;
                err.data = err;
                return next(err);
            }
            const token = jwt.sign({
                    email: username
            }, keys.TOKEN_SECRET, {expiresIn: "1h"})

            res.status(201).json({
                message: "User created",
                data: {
                    email: user.username,
                    localid: user._id,
                    idToken: token,
                    expiresIn: 3600
                }
            });
    });
});

module.exports.signin = (req, res, next) => {
    passport.authenticate("local", {session: false}, (err, user, info) => {
        if(err) return res.status(401).json({
            message: "Auth Fail",
            error: err
        });
        if(!user) return res.status(401).json({ message: "Auth Fail - No User Found" });
        const token = jwt.sign({
            email: user.username,
            localid: user._id
        }, keys.TOKEN_SECRET, {expiresIn: "1h"});
        res.status(200).json({
            message: "Login Successful",
            data: {
                email: user.username,
                localid:  user._id,
                idToken: token,
                expiresIn: 3600
            }
        });
        })(req, res, next);
}
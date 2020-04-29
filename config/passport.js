const passport = require("passport");
const User = require("../models/user");
const LocalStrategy = require("passport-local");

module.exports.configurePassport = () => {
    passport.use(new LocalStrategy({
        usernameField: "email"
    }, User.authenticate()));
}
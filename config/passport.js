const passport = require("passport");
const User = require("../models/user");

module.exports.configurePassport = () => {
    passport.use(User.createStrategy());
}
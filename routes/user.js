const router = require("express").Router();
const userController = require("../controllers/user");
const { body } = require("express-validator");
const User = require("../models/user");
const passport = require("passport");

// POST /auth/local/signup
router.post("/local/signup", [
    body("email")
    .isEmail()
    .withMessage("Invalid email")
    .custom( async (value, { req }) => {
        try {
            const user = await User.findOne({username: value});
            if(user) {
                return Promise.reject("Conflict");
            }
            return true;
        } catch (error) {
            next(error);
        }
    }),
    body("password")
    .isLength({min: 5}),
    body("fullname")
    .notEmpty()
    .isLength({min: 5})
], userController.signup);

// POST /auth/local/signin
router.post("/local/signin", userController.signin);

// Access to fetch at 'http://localhost:2020/auth/local/signin' from origin 
// 'http://localhost:3000' has been blocked by CORS policy: 
// Response to preflight request doesn't pass access control check: It does not have HTTP ok status.
module.exports = router;
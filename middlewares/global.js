const router = require("express").Router();
const bodyParser = require("body-parser");
const { configurePassport } = require("../config/passport");

router.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Methods", "POST, GET, PATCH, PUT, OPTIONS");
    res.header("Access-Control-Allow-Origin", "*");

    next();
});

router.use(bodyParser.json());
configurePassport();

module.exports = router;
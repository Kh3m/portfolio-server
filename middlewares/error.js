
const router = require("express").Router();

router.use( (error, req, res, next) => {
    console.log("ERROR MIDDLEWARE");
    if(!error.statusCode) {
        error.statusCode = 500;
    }
    res.status(error.statusCode).json({
        message: error.message,
        status: error.statusCode,
        data: error.data
    });
});

module.exports = router;
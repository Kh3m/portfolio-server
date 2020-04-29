const router = require("express").Router();
const authRoute = require("../routes/user");

router.use("/auth", authRoute);

module.exports = router;
const mongoose = require("mongoose");
const keys = require("../config/keys");

// env variables
const { PORT, DB_URL } = require("../config/keys");

mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;

module.exports.connectToDB = ( app ) => {
    connection.on("error", console.error.bind(console, "Portfolio failed to connect to DB"));
    connection.once("open", () => {
        app.listen(PORT, () => {
            console.log(`App running at http://localhost:${PORT}`);
        });            
    });
}

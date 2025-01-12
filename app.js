const express = require("express");
// const bodyParser = require('body-parser');
const mongodb = require("./db/connect");
const app = express();

const port = process.env.PORT || 3030;

// app.use(bodyParser.json());
app.use("/", require("./routes/route"));


mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port, () => {
            console.log(`Connected to DB and listening on ${port}`);
        });
    }
});

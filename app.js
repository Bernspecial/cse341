const express = require("express");

const app = express();

const port = process.env.PORT || 3030;

app.use("/", require("./routes/route"));

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
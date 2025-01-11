const routes = require("express").Router();

routes.get("/", (req, res) =>{
    res.send("Hello Wlord again.....!")
});

module.exports = routes;
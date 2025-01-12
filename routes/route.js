const router = require("express").Router();


router.get("/", (req, res) =>{
    res.send("Welcome to my CSE341 assignments.....! I am Bernard Olayemi Michael")
});

router.get("/contacts", require("./user"));
router.get("/contacts/:id", require("./user"))

module.exports = router;
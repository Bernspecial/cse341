const router = require("express").Router();


router.get("/", (req, res) =>{
    res.send("Hello World again.....!")
});

router.get("/contacts", require("./user"));
router.get("/contacts/:id", require("./user"))

module.exports = router;
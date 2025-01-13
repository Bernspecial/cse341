const router = require("express").Router();


router.use("/", require("./swagger"));

router.get("/", (req, res) =>{
    // swagger.tags = ["Welcome to my CSE341 assignments.....! I'm Bernard Olayemi Michael"]
    res.send("Welcome to my CSE341 assignments.....! I am Bernard Olayemi Michael")
});

router.use("/contacts", require("./user"));
// router.get("/contacts/:id", require("./user"));
// router.post("/contacts", require("./user"));
// router.put("/contacts/:id",  require("./user"));
// router.delete("/contacts/:id", require("./user"));


module.exports = router;
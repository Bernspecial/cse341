const express = require("express");
const router = express.Router();

const usercontroller = require("../controller/contacts");


router.get("/contacts", usercontroller.getAllData);

router.get("/contacts/:id", usercontroller.getSingleData);

module.exports = router;
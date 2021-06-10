const express = require("express")
const router = express.Router();
const listController = require("../controllers/listController");

router.get("/persons",listController.getAllPersons);

module.exports = router;
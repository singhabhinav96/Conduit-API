var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.json("Hello,Welcome to Conduit");
});

module.exports = router;

var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertOne(req.body.burger_name, function() {
        res.redirect("/");
    });
});

router.post("/", function (req, res) {
    var id = req.params.id;
    burger.updateOne(id, function() {
        res.redirect("/");
    });
});

module.exports = router;
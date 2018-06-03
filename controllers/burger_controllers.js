//burger_controllers.js

var express = require("express");

var router = express.Router();


//Import Models
var burgerModel = require("../models/burger_model.js");

//GET
router.get("/", function (req, res) {
    burgerModel.all(
        function (data) {
            var hbsObj = {
                burgers: data
            };
            console.log("hbsObj", hbsObj);
            res.render("index", hbsObj);
        })

})

//POST
router.post("/api/new", function (req, res) {
    console.log("inside POST", req.body);
    burgerModel.insert(req.body.newBurger,
        function (data) {
            console.log("posted", data);
            res.sendStatus(200)
        })
})
//PUT
router.put("/api/update/:burgerName", function (req, res) {
    var condition = req.params.burgerName;
    console.log("put condition", condition);
    burgerModel.update(condition, function (result) {

        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            console.log("put update", result);
            res.status(200).end();
        }
    })
})

//DELETE
router.delete("/api/delete/:burgerName", function (req, res) {
    var condition = req.params.burgerName;
    console.log("delete condition", condition);
    burgerModel.delete(condition, function (result) {
        // console.log("delete complete", result);
            res.sendStatus(200);
    })
})

// Export routes for server.js to use.
module.exports = router;
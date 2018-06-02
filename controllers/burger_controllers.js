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
    burgerModel.insert( burgerName,
        function (result) {
            // res.json({ name: result.burgerName })
        })
        console.log(burgerName);
})
//PUT
router.put("/api/update/:burgerName", function (req, res) {
    var condition = req.param.burgerName;
    console.log("condition", condition)
    burgerModel.update(condition, function (result) {

        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
            console.log("update complete")
        }
    })
})

//DELETE
router.delete("/api/delete/:burgerName", function (req, res) {
    var condition = req.params.burgerName;
    burgerModel.delete(condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
            console.log("delete complete")
        }
    })
})

// Export routes for server.js to use.
module.exports = router;
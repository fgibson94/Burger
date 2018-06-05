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
    // console.log("inside POST", req.body);
    burgerModel.insert(req.body.newBurger,
        function (data) {
            // console.log("posted", data);
            res.sendStatus(200)
        })
})
//PUT
router.put("/api/update/:burgerName", function (req, res) {
    var condition = req.params.burgerName;
     console.log("put condition", condition);
    burgerModel.update(condition, function (data) {
        // console.log("check condition", condition);

        res.sendStatus(200);

    })
})

//DELETE
router.delete("/api/delete/:burgerName", function (req, res) {
    var condition = req.params.burgerName;
    // console.log("delete condition", condition);
    burgerModel.delete(condition, function (data) {
        
            res.sendStatus(200);
    })
})

// Export routes for server.js to use.
module.exports = router;
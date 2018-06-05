//orm.js
// Import MySQL connection.
var connection = require("../config/connection.js");

var orm = {
    selectAll: function (cb) {
        console.log("select all!");
        connection.query('SELECT * FROM burgers', function (err, res) {
            if (err) throw err;
            //console.log("selectAll", res);
            cb(res);
        })

    },
    insertOne: function (burgerName, cb) {
        console.log("inserted!", burgerName);
        var queryString = 'INSERT INTO burgers (burger_name, devoured) VALUES (?, False)'
        connection.query(queryString, [burgerName], function (err, res) {
            if (err) throw err;
            // console.log("insertOne", res);
            cb(res);
        })

    },
    updateOne: function (burgerName, cb) {
        console.log("updated!", burgerName);
        var queryString = 'UPDATE burgers SET devoured = true WHERE burger_name = ?'
        connection.query(queryString, [burgerName], function (err, res) {
                if (err) throw err;
                // console.log("updateOne", res);
                cb(res);
            })
    },
    deleteThis: function (burgerName, cb) {
        console.log("deleted", burgerName);
        var queryString = 'DELETE FROM burgers WHERE burger_name = ?'
        connection.query(queryString,
            [ burgerName ], function (err, res) {
                if (err) throw (err);
                // console.log("deleteThis", res)
                cb(res);
            })
    }
}

//Export DB Commands
module.exports = orm;
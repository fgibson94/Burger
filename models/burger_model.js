//burger_model.js
//Import ORM
var orm = require("../config/orm.js");

var burgerModel ={
    all: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },
    insert: function (burgerName,cb) {
        orm.insertOne(burgerName, function(res){
            cb(res);
        });
    },
    update: function (burgerName, cb) { 
        orm.updateOne(burgerName, function(res){
            cb(res);
        });
    },
    delete: function(burgerName, cb){
        orm.deleteThis(burgerName, function(res){
            cb(res);
        });
    }    
};

//Export Burger Commands
module.exports = burgerModel;
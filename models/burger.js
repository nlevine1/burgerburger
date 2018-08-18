const orm = require('../config/orm.js');

let burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(val, cb) {
        orm.insertOne("burgers","burger_name", val, function(res) {
            cb(res);
        });
    },
    updateOne: function(colVal, conditionVal, cb){
        orm.updateOne('burgers', 'devoured', colVal, 'id', conditionVal, function(res){
          cb(res);
        });
    }
    // delete: function(condition, cb) {
    //     orm.delete("burgers", condition, function(res){
    //         cb(res);
    //     });
    // }

};

module.exports = burger;

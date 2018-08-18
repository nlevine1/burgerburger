const orm = require('../config/orm.js');

let burger = {
    All: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insert: function(val, cb) {
        orm.insertOne("burgers", val, function(res) {
            cb(res);
        });
    },
    update: function(colVal, conditionVal, cb){
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

const connection = require("../config/connection.js");


let orm = {

    selectAll: function (tableInput, cb) {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, res) {
            if (err) throw err;
            return cb(res);

        });
    },

    insertOne: function (table, cols, burger, cb) {
        let queryString = "INSERT INTO " + table + "(" + cols + ") VALUES (?)";

        connection.query(queryString, [burger], function (err, res) {
            if (err) throw err;
             cb(res);
        })
    },

    updateOne: function(table, col, colVal, condition, conditionVal, callback){
        var queryString = 'UPDATE ' + table + ' SET ' + col + '=?' + 'WHERE ' + condition + '=?';
    
        connection.query(queryString, [colVal, conditionVal], function(err, data){
          if(err) throw err;
          callback(data);
        });
    }
}
module.exports = orm;


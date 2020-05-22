// var db = require('./dbconnection'); //reference of dbconnection.js
import db from './dbconnection';
var Crud = {
    // get: function (table, callback) {
    //     return db.query("SELECT * FROM " + table, callback);
    // },
    // getById: function (id, table, callback) {
    //     return db.query("SELECT * FROM " + table + " WHERE Id=?", [id], callback);
    // },
    // insert: function (values, table, callback) {
    //     return db.query("INSERT INTO " + table + " SET ?", [values], callback);
    // },
    // delete: function (id, table, callback) {
    //     return db.query("DELETE FROM " + table + " WHERE Id=?", [id], callback);
    // },
    // update: function (id, table, values, callback) {
    //     return db.query("UPDATE " + table + " SET ? WHERE Id=?", [values, id], callback);
    // }
    selectHukamnamaAmritRss: function(callback) {
      return db.query('select * FROM HKMDS  order by adddatetime desc limit 10', callback);
    }
};
export default Crud;

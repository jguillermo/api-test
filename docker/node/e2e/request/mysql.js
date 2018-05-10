/**
 * 
 * Modo de uso : 
 * 
 * const mysql = require('@mysql');
 * 
mysql('SELECT 4 + 4 AS solution', function (results) {
    console.log('The solution is: ', results[0].solution);
});
 */

require('./config');
var mysql = require('mysql');
function getConnection() {
    //'mysql://user:pass@host:port/dbname';
    let connection = mysql.createConnection(process.env.DATABASE);
    connection.connect();
    return connection;
}
function query(sql,cb){
    let  conection = getConnection();
    conection.query(sql, function (error, results, fields) {
        if (error) throw error;
        conection.destroy();
        cb(results);
    });
}
module.exports = query;

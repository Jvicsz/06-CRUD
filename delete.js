var mysql = require('mysql');

var con = mysql.createConnection({
   host:"localhost",
   user:"phpmyadmin",
   password:"aluno",
   database:"mydb",
});

con.connect(function(err) {
 if (err) throw err;
var sql = "DELETE FROM custumers WHERER address = 'Moutain21'";
  con.query(sql, function (err, result) {

if (err) throw err;
console.log("Number of records deleted: " + result.affectedRows);
});
});

const mongo=require("mongoose");
mongo.connect("mongodb://127.0.0.1:27017/RECIPE")
// var conn=mongo.connection;
mongo.connection.on('connected', () => console.log('Connected'));
mongo.connection.on('error', () => console.log('Connection failed with '));


module.exports=mongo;
// const Register=mongo.model("Register",employschema);
// module.export=Register;
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://127.0.0.1:27017/";

// MongoClient.connect(url, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("mydb");
//   var myobj = { name: "Company Inc", address: "Highway 37" };
//   dbo.collection("customers").insertOne(myobj, function(err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close();
//   });
// });
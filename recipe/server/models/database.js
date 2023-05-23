// const mongo=require("mongoose");
// mongo.connect(process.env.mongodb_url);

// mongo.connection.on('connected', () => console.log('Connected'));
// mongo.connection.on('error', () => console.log('Connection failed with '));


// require('./Category');
// require('./Recipe');
// process.env.mongodb_url
// const { Console } = require('console');
// const mongoose = require('mongoose');
// mongoose.connect( "mongodb+srv://khushi:<Cluster>@cluster0.k2o4ori.mongodb.net/?retryWrites=true&w=majority")
// .then(()=> console.log("connected successfully")).catch(()=> console.log("error"));

// const db = mongoose.ceateConnection;
// db.on("error",function () {
//   console.log("error");})
// db.once('open', function(){
//   console.log('Connected')
// });

// Models
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://khushi:<Cluster>@cluster0.0acxlje.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  // client.close();
const mongo=require("mongoose");
mongo.connect("mongodb://127.0.0.1:27017/COOKING")
// var conn=mongo.connection;
mongo.connection.on('connected', () => console.log('Connected'));
mongo.connection.on('error', () => console.log('Connection failed with '));

require('./Recipe');
require('./Category');
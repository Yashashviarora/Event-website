const express=require("express");
const { urlencoded } = require("express");
const path=require("path");
const expresslayouts = require("express-ejs-layouts");
const { dirname } = require("path");
const app=express();
const port=1234;

require("dotenv").config();
app.use(urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use(expresslayouts);
app.set("layout","./layouts/main");
app.set('views', path.join(__dirname, '/views'))
const a=path.join(__dirname, '/views')
// app.set('views','views')
app.set("view engine","ejs");

const routes=require('./server/routes/recipe.js');
app.use('/',routes);
app.listen(port,()=>{
   console.log("listen to port",port);
   console.log(a);
   
})
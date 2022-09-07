const express =require("express");
const app=express();
const router=express.Router();
const path=require("path")
const hbs=require("hbs")
const paytm = require('paytm-nodejs');
const port=process.env.port||5000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));
// app.use('/submit',require('./routes/server'));
const Register=require("./src/db/conn");

const { Timestamp, Int32 } = require("mongodb");

app.set('views', path.join(__dirname, '/views'))
const a=path.join(__dirname, '../views')
app.set("view engine","hbs");
app.get('/',(req,res)=>{
     res.render("signup");
})
app.get('/home',(req,res)=>{
    res.render('home');
})
app.get('/tour&travels',(req,res)=>{
    res.render("tour&travels");
})
app.get('/carvisit',(req,res)=>{
    res.render("customer");
})
const Recipeschema=new Register.Schema({
    
    Name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    Confirmpassword:{
        type:String,
        require:true
    }

})
var userModel=Register.model('Client',Recipeschema);
 
module.exports = Register.model("Users", Recipeschema);
app.post('/signup',async(req,res)=>
{

    

    try
    {
        // res.send( req.body.password);
       const password=req.body.password;
       const  Cpassword=req.body.Cpassword;
       if(password == Cpassword)
       {
            // console.log("i'm inside the schema blokc to styore in db")
            const REg = new userModel
        ({
            // firstname: req.body.firstname,
            // lastname:req.body.lastname,
            Name:req.body.username,
            email:req.body.email,
            password:password,
            Confirmpassword:Cpassword
        })
        await REg.save()
        .then(item => 
        {  console.log("byee");
        res.status(200).render("home");
        })
        .catch(err => 
        { console.log("hello");
        res.status(400).send("unable to save to database");
        });
    }  else{
        res.send("passwprd are not matching")
    }
}
        catch(err){
            console.log("ERRORRRRRRRRRRRRRRRRRRRRRRR");
            res.status(400).send(err);
        }
      
      
    
})
const CARRECORD=new Register.Schema({
    
    Name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phonenumber:{
        type:Number,
        require:true,
        unique:true

    },
    date:{
        type:Date,
        require:true
    },
    time:{
        type:Number,
        require:true
    },
    car:{
        type:String,
        require:true
    },
    dis:{
       type:Number,
       require:true
    }




    

})

var CAR=Register.model('CARDETAILS',CARRECORD);
 
module.exports = CAR
app.post('/submit',async(req,res)=>
{

    

    try
    {
        // res.send( req.body.password);
    //    const password=req.body.password;
    //    const  Cpassword=req.body.Cpassword;
    //    if(password == Cpassword)
       
            // console.log("i'm inside the schema blokc to styore in db")
          const CARD = new CAR
        ({
            // firstname: req.body.firstname,
            // lastname:req.body.lastname,
            Name:req.body.NAME,
            email:req.body.EMAIL,
             phonenumber:req.body.NUMBER,
            date:req.body.DATE,
            time:req.body.TIME,
            car:req.body.CAR,
            dis:req.body.RANGE
        })
        await CARD.save()
        .then(item => 
        {  console.log("byee");
        res.status(200).render("");
        })
        .catch(err => 
        { console.log("hello");
        res.status(400).send("unable to save to database");
        });
    
}
        catch(err){
            console.log("ERRORRRRRRRRRRRRRRRRRRRRRRR");
            res.status(400).send(err);
        }
      
      
    
})
// router.post('/register', function(req, res) {
     
//     req.assert('name', 'Name is required').notEmpty()           //Validate name
//     req.assert('email', 'A valid email is required').isEmail()  //Validate email
  
//     var errors = req.validationErrors()
     
//     if( !errors ) {   //No errors were found.  Passed Validation!
         
//      if(password==Cpassword){
//       var userDetails = new userModel({
//         firstname: req.body.firstname,
//                     lastname:req.body.lastname,
//                     email:req.body.Email,
//                     password:password,
//                     Confirmpassword:Cpassword
//       })
//     };
       
//       userDetails .save((err, doc) => {
//             if (!err){
//                 req.flash('success', 'User added successfully!');
//                 res.redirect('/');}
//             else
//                 console.log('Error during record insertion : ' + err);
//       });
   
//     }
//     else {   //Display errors to user
//         var error_msg = ''
//         errors.forEach(function(error) {
//             error_msg += error.msg + '<br>'
//         })                
//         req.flash('error', error_msg)        
         
//         res.render('/', { 
//             title: 'Add New User',
//             firstname: req.body.firstname,
//                     lastname:req.body.lastname,
//                     email:req.body.Email,
//                     password:password,
//                     Confirmpassword:Cpassword
//         })
//     }
// });

app.listen(port,()=>{
    console.log(a);
    console.log(`server ${port}` );
})
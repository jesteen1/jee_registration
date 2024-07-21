
const express=require("express");
//const path=require("path");
//const mongodb=require("bcrypt");
// const { log } = require("console");
const collection=require("./config")
const studentmarks=require('./students')
const phyicsexam=require('./phyicsexam')
const chemestryexam=require('./chemistryexam')
//const js_alert=require('js-alert')
const app=express();
const htmlsantizer=require("sanitize-html")
const {AsyncLocalStorage}= require('async_hooks');



//var Localstore= new LocalStorage('./scratch');
const mathsexam=require('./mathsexam')

const storage=require('node-sessionstorage')
const useradd=require('./results');
const { SocketAddress } = require("net");
const cokkieparser=require('cookie-parser');
const resultdatas = require("./results");
const { log } = require("console");
const mongosantization=require("express-mongo-sanitize")
const xss=require("xss-clean")
app.use(cokkieparser())
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.set('view engine','ejs');
app.use('/user',express.static("public"));
app.use(mongosantization())
app.use(xss())
app.use(express.static("public"));

  //  app.use('/user',ensureLogin.ensureLoggedIn({redirectTo:'/'}))


//var phyics_store_score;
//const storage=new AsyncLocalStorage() ;
var check=false;

function passprocted(req,res,next){
res.set('WWW-Authenticate','Basic realm="simple App"')
if(req.headers.authorization == 'Basic am9zZTpwYXNz'){
    next()
  }else{
    res.status(401).send("please prove id password")
  }
}
app.use(passprocted)
var namedata;
var namedata2;
var namedata3

app.get('/' , passprocted,(req,res)=>{
   
    res.render("login")
})

app.post('/' ,   async (req,res)=>{


const user={
name:req.body.username,
passcode:req.body.passcode
}
    
    // console.log(data);
    


    const  userdata= await collection.insertMany(user);
//    console.log("mongodb data",alluser);



   
res.render("uploadedsucessfuly")

 }


    )

const port=3000
app.listen(port,()=>{
    console.log("server is running 3000")
})








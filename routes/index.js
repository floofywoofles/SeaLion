const express = require("express");
const router = express.Router();

router.get('/',(req,res)=>{
  res.render('index',{name: 'Home'});
})

router.get('/login',(req,res)=>{
  res.render('login',{name: 'Login'});
})

router.get('/signup',(req,res)=>{
  res.render('signup',{name: 'Signup'});
})

module.exports = router;

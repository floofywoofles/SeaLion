const express = require("express");
const router = express.Router();
const isLoggedIn = require('../middleware/isLoggedIn')
const posts = require('../models/post');

router.get('/home',isLoggedIn,async (req,res)=>{
  this.p = await posts.find({author: req.session.username});
  console.log(this.p)
  res.render('home',{t: 'Social - Home', heading: `Welcome, ${req.session.username}`, posts: this.p})
});

module.exports = router;

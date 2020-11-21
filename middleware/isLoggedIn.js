const express = require('express');
const router = express.Router();

router.use('/',(req,res,next)=>{
  let username = req.session.username ?? undefined;
  if(!username || username.length < 5){
    next(res.redirect('/'));
  } else {
    next();
  }
});

module.exports = router;

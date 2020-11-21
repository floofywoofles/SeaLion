// Import user schema
let User = require('../models/user');

exports.login = async (req,res)=>{
  let username = req.body.username;
  let password = req.body.password;

  let inst = await User.findOne({username: username});

  if(inst){
    req.session.username = username;
    res.redirect('/landing/home')
  } else {
    res.send('User does not exist');
  };
}

exports.signup = async (req,res,next)=>{
  const user = new User({
    username: req.body.username,
    password: req.body.password
  });
  let inst = await User.findOne({username: req.body.username});

  // TODO: add encryption/hashing

  if(!inst){
    user.save((err,user)=>{
      if(err){
        res.status(500).send({message: err});
        return
      }
      res.send({ message: "User was registered successfully!" });
    })
  } else {
    res.send({ message: "User already exists" });
  }
}

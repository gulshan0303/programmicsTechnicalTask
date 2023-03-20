const Image = require('../model/imageModel');
const UserModel = require("../model/userModel");

const clickImage = async (req, res) => {
  // res.json("clickImages")
  
  const user = await UserModel.findOne({email:req.body.email})
  //  console.log('first', first)
  // console.log('existingUser', existingUser)
    // res.json(user)
    
   const saveImage = await Image.create({ name:user?.name, name:user.name, clickTime:req.body.clickTime, image:req.body.image });
  //  await saveImage.save();
   console.log('saveImage', saveImage)
  res.json({message:"Successs",saveImage})
};
  
  // Export the addImage controller
  module.exports = { clickImage };


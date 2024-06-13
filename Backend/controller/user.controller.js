import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup= async (req,res)=>{
try{
const { fullname , email , password}=req.body;
const user= await User.findOne({email})
if(user){
    return res.status(400).json({messegae:"user alredy exist"});
}
const hashPassword= await bcryptjs.hash(password,10);
const createdUser=new User({
    fullname:fullname,
    email :email,
    password :hashPassword,
})
await createdUser.save();
 res.status(201).json({messegae:"user created successfully"});
}catch(error){
console.error("Error"+ error);
res.status(500).json({ message:"internal server error"});
 }
};
export const login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
      
      if (!user) {
        return res.status(400).json({ message: "Invalid username or password" });
      }
      
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid username or password" });
      }
      
      res.status(200).json({
        message: "Login successful",
        user: {
          _id: user._id,
          email: user.email,
          password :user.password,
        },
      });
    } catch(error) {
      console.log("Error: " + error.message);
      res.status(500).json({ message: "Internal server error" });
    }
  };
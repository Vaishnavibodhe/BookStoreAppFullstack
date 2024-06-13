import React from 'react'
import {Link,useNavigate,useLocation } from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
//import Login from "./Login";

function Signup (){
const location= useLocation();
const navigate= useNavigate();
const from =location.state?.from?.pathname || "/"
  const {
    register,
    handleSubmit,
  
    formState: { errors },
  } = useForm();

  const onSubmit = async(data) => {
    const userInfo={
      fullname: data.fullname,
    email: data.email,
  password: data.password,
};
try {
  const res = await axios.post('http://localhost:4002/user/signup', userInfo);
  console.log(res.data);

  
  if(res.data){
    toast.success('signup successfull');
    navigate(from, {replace:true});
  }
}catch (err) {
  toast.error('signup error ');
}
  };


  return (
    <>
    <div className='flex h-screen items-center text-black justify-center'>
    <div id="my_modal_3" className="w-[600px] ">
  <div className="modal-box">
    <form  onSubmit={handleSubmit(onSubmit) } method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
        ✕
        </Link>
   
    <h3 className="font-bold text-lg">Signup</h3>
    <div>
        <span>Name</span>
        <br/>
        <input  className=" mt-2 border rounded"
         type="text" 
         placeholder='please enter your fullname'
         {...register("fullname", { required: true })}/>

      {errors.fullname && <span  className="text-sm text-red-500">This field is required</span>}
    </div>
    <div>
        <span>Email</span>
        <br/>
        <input  className=" mt-2 border rounded"
         type="email" 
         placeholder='please enter your email'
         {...register("email", { required: true })}/>
      {errors.email && <span  className="text-sm text-red-500">This field is required</span>}
    </div>
    <div className="mt-4 ">
        <span>password</span>
        <br/>
        <input  className=" mt-3 border rounded" 
        type="password" 
        placeholder='please enter your password'
        {...register("password", { required: true })}/>
    {errors.password && <span  className="text-sm text-red-500">This field is required</span>}
    
    </div>
    <div className="justify-around flex mt-4 ">
        <button className="bg-pink-500 rounded px-2 mx-2   text-white">Signup</button>
       <p>Have account?{""}
        <Link to="/" className="text-blue-500 cursor-pointer">Login</Link>{""}
       </p>
    </div>
    </form>
  </div>
</div>
  
      </div>
    </>
    
  )
}

export default Signup

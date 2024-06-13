import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {

  const {register, handleSubmit,formState: { errors },} = useForm();

  
    const onSubmit = async (data) => {
      const userInfo={
        email: data.email,
        password: data.password,
      };
try{
  const res = await axios.post('http://localhost:4002/user/login', userInfo);
  console.log(res.data);

  
  if(res.data){
    toast.success('Successfully created!');
    
  }
}catch (err) {
  toast.error('This is an error!');
}
  };

  
  return (
    <>
    <div>
{/* You can open the modal using document.getElementById('ID').showModal() method */}

<dialog id="my_modal_3" className="modal">
  <div className="modal-box text-black">
    <form   onSubmit={handleSubmit(onSubmit) }method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=> document.getElementById("my_modal_3").close()}>
        ✕
        </Link>
   
    <h3 className="font-bold text-lg">Login</h3>
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

      {errors.password && <span className="text-sm text-red-500">This field is required</span>}
    </div>
    <div className="justify-around flex mt-2 ">
        <button className="bg-pink-500 rounded px-2  text-white">Login</button>
       <p>Not Registered?{""}
        <Link to="/signup" className="text-blue-500 cursor-pointer">Signup</Link>{""}
       </p>
    </div>
    </form>
  </div>
  
</dialog>
    </div>
    </>
  )
}

export default Login
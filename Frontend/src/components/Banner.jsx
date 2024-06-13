import React from 'react'
import book from '/bookImage.avif';
const Banner = () => {
  return (
   <>
   <div className="max-w-screen flex container mx-auto md:px-5 px-2 ">
<div className='  w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36' >
    <div className="space-y-7">
    <h1 className=" text-3xl font-bold">
    Hello, Wellcomes Here To Learn Something <span className="text-pink-500">New Everyday!!!</span>  
    </h1>
    <p className="text-md font-semibold ">Books are portable and so they are easy to carry around. And so books can be read at any time night or day, while travelling on a bus or train or flight, and at meal time too. Books are published in many languages and in varied genres. </p>
    <label className="input input-bordered flex items-center gap-2">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
  <input type="text" className="grow" placeholder="Email" />
</label>
 </div>
 <button className="btn mt-4 btn-secondary">Secondary</button>
 </div>
 <div className= 'mt-20 mx-10 order-1  md:w-1/2 ' >
  <img src={book} className=" w-90 h-90" alt=""/>
 </div>
 
 </div>
   </>
  )
}

export default Banner
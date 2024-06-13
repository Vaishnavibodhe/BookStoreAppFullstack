import React ,{useState,useEffect} from 'react'
//import list from "../../public/list.json";
import Cards from "./Cards";
import {Link} from 'react-router-dom'
import axios from "axios";
//import Navbar from "./Navbar";
const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getBook= async()=>{
      try{
       const res=await axios.get("http://localhost:4002/book");
       console.log(res.data);
       setBook(res.data)
      }
      catch(error){
       console.log(error)
      }
    }
    getBook();
  },[])
  return (
    <>
    
    <div className="max-w-screen-2xl container mx-auto md:px-8 px-3 ">
     <div className="mt-28 items-center justify-center text-center">
      <h1 className="text-2xl font-bold">We are Delighted to Have You <span className="text-pink-500">Here ! :)</span></h1>
     <p className="mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quod inventore, 
        ex error placeat unde aliquam voluptate,
      blanditiis nostrum autem doloremque quaerat quam animi?
        Esse sunt officia commodi similique enim!blanditiis nostrum autem doloremque quaerat quam animi?
        Esse sunt officia commodi similique enim!
      </p>
      <Link to="/">
      <button className="bg-pink-500 mt-7 text-white rounded-md px-4 py-2 hover:bg-pink-300">Back</button>
      </Link>
      
      </div>
      <div className=" flex flex-wrap mt-3  grid-cols-1 md:grid-cols-4">
        {
         book.map((item)=>(
          <Cards key={item.id} item={item}/>
         ))
        }
      </div>
   </div>
   
    </>
    
  )
}

export default Course
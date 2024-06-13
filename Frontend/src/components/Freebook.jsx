import React ,{useState ,useEffect} from 'react'
import Cards from '../components/Cards'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
//import list from "../../public/list.json";
import axios from "axios";

function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(()=>{
    const getBook= async()=>{
      try{
       const res=await axios.get("http://localhost:4002/book");
       console.log(res.data);
       setBook(res.data.filter((data) =>(data.category=== "Free")))
      }
      catch(error){
       console.log(error)
      }
    }
    getBook();
  },[])

  
 
  
 var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-32 px-4  " >
   <div>
    <h1 className= "font-bold text-xl pb-2">Free offered courses</h1>
    <p className="font-semibold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint porro excepturi sunt. Magni atque, rerum sit, consequuntur fugiat quae minima a quod ratione explicabo nemo saepe dicta. Perspiciatis, nihil repudiandae.</p>
    </div>
    
    <div className="">
      <Slider {...settings}>
       {book.map((item)=>(
        <Cards  item={ item} key={item.id}/>
       ))}
      </Slider>
    </div>
  </div>

    </>
  
  )
}

export default Freebook
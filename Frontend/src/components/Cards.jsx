import React from 'react'

function Cards ({item}){
  console.log(item);
  return (
    <>
    <div className="mt-4 my-3 p-3">
    <div className="card mx-4 p-3  w-60 light:bg-slate-200 shadow-xl image-cover hover:scale-105 duration-200 dark:border dark:bg-slate-900 dark:text-white">
  <figure>
   <img src={item.image}/>
    </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p className="text-sm ">{item.title}</p>
    <div className="card-actions  justify-between">
      <div className="badge badge-outline">{item.price}</div> 
      <div className="rounded-md p-2 hover:text-white hover:bg-pink-500">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards

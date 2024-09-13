import React from 'react'

function Cards({item}) {
    console.log(item);
    
  return (
    <>
    <div className="mt-5 my-8 p-4">
    <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border-white" >
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary bg-pink-800 text-white border-0">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions flex justify-between">
      <div className="badge badge-outline p-3">${item.price}</div>
      <div className="badge badge-outline hover:bg-pink-800 hover:text-white duration-200 cursor-pointer p-3">Bay Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
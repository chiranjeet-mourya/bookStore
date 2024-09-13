import React, { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import { Link } from "react-router-dom";
import axios from "axios"

function Course() {

  const [book, setBook] = useState([])

  useEffect(()=>{
    const getBook = async()=>{
        try {
         const response = await axios.get("http://localhost:4001/book");
         console.log(response.data);
         setBook(response.data);
         
        } catch (error) {
          console.log("Error",error);
          
        }
    }
    getBook();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container max-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-800">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            iusto, dolorem accusantium at dicta recusandae qui. Quidem
            exercitationem doloribus distinctio ipsa dignissimos cupiditate
            magni non maxime in et numquam aperiam nesciunt veniam reprehenderit
            laudantium, ullam rem hic nisi. Libero, nesciunt. Ipsa vitae veniam
            voluptates iste harum animi quae modi ipsum.
          </p>
          <Link to="/">
          <button className="mt-6 bg-pink-800 text-white px-6 py-2 rounded-md hover:bg-pink-700 duration-200">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => 
            <Cards key={item.id} item={item} />
          )}
        </div>
      </div>
    </>
  );
}

export default Course;

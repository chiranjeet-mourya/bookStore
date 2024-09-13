import React from "react";
import Home from "./Home/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./Components/Signup";
import { Toaster } from 'react-hot-toast';
import { useAuth } from "./Context/Authprovider";
import Contacts from "./Contact/Contacts";

function App() {

  const [authUser, setAuthuser] =useAuth()
  console.log(authUser);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup"/>} />
            <Route path="/contact" element={<Contacts/>}/>
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Toaster />
      </div>
    </>
  );
}

export default App;

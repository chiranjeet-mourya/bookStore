import React from 'react'
import { useAuth } from '../Context/Authprovider';
import toast from 'react-hot-toast';

function Logout() {

    const [authUser, setAuthuser] =useAuth()

    const handleLogout=()=>{
        try {
            setAuthuser({
                ...authUser,
                user:null
            })
            localStorage.removeItem("Users");
            toast.success("Logout successfylly")
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            
        } catch (error) {
            toast.error("Error:" + error.msg)
            setTimeout(() => {}, 3000);
        }
    }

  return (
   <>
   <button className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
   onClick={handleLogout}>
    Logout
    </button>
   </>
  )
}

export default Logout
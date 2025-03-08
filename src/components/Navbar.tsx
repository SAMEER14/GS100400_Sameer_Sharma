import React,{useState} from 'react';
import logo from "../assets/Gsynergy Logo V2 Long Description.svg";

// import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {

    const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <nav className= "px-6 py-3 flex justify-between items-center border-b border-gray-300 border-b-2">
        <img src={logo} alt="Gsynergy Logo" className="h-16 w-auto object-contain" />
        <h1 className="text-4xl font-semibold">Data Viewer App</h1>
       
        <button
        className="flex items-center gap-1 cursor-pointer"
        onClick={() => setIsSignedIn(!isSignedIn)} >
        <img 
            src="https://banner2.cleanpng.com/20180622/tqt/aazen4lhc.webp"
            alt="User Icone"
            className='h-10 w-10 object-cover rounded-full'
        />

        <img
          src="https://cdn-icons-png.flaticon.com/512/60/60995.png"
          alt="Dropdown Arrow"
          className='h-4 w-4'
        />
        </button>
    </nav>
  )
}

export default Navbar;

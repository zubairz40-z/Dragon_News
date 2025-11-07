import React
 from "react";
 import logo from "../assets/logo.png"
import { format, formatDate } from "date-fns";

 const Header =()=>{
    return(
        <div className="flex  flex-col justify-center items-center gap-3 p-10">
            <img className="w-[350px]" src={logo} alt="" />
            <p className="text-gray-400">Journalism without Fear or Favour</p>
            <p className="text-semi-bold text-gray-500">{format(	new Date(),"EEEE, MMMM MM, yyyy ")}</p>
        </div>
    )
 }

 export default Header;
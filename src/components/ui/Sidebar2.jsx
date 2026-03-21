import React, { useState } from "react";
import { act } from "react";
import { NavLink } from "react-router-dom";
function Sidebar2()
{


  const [active , isActive]=useState("dashboard");


  
    return(
        <div className="w-64 h-screen bg-gray-200 border-r p-5">

      <div className="flex items-center gap-3 mb-8">
        <div className="bg-blue-400 text-white p-2 rounded-md">
          📚
        </div>

        <div>
          <h2 className="font-bold text-gray-800">RKMGEC</h2>
          <p className="text-xs text-gray-500">Student Portal</p>
        </div>
      </div>

    
      <ul className="space-y-4 text-gray-700">
      
<NavLink to="/" >
 <li 
        onClick={()=>isActive("dashboard")}
        className={`flex items-center gap-3 p-3 rounded-md hover:bg-blue-100 text-green-00 cursor-pointer ${active==="dashboard"?"bg-blue-100":""} `}>
          📊 Dashboard
        </li>
</NavLink>
       

<NavLink to="/books">
     <li 
        onClick={()=>isActive("browse Books")}
        className={`flex items-center gap-3 p-3 rounded-md hover:bg-blue-100 text-green-00 cursor-pointer ${active==="browse Books"?"bg-blue-100":""} `}>
          🔍 Browse Books
        </li>
</NavLink >

<NavLink to="/new">
          <li 
        onClick={()=>isActive("my Books")}
        className={`flex items-center gap-3 p-3 rounded-md hover:bg-blue-100 text-green-00 cursor-pointer ${active==="my Books"?"bg-blue-100":""} `}>
           📖My Books
        </li>        
</NavLink>
<NavLink to="/History"> 
      <li 
        onClick={()=>isActive("history")}
        className={`flex items-center gap-3 p-3 rounded-md hover:bg-blue-100 text-green-00 cursor-pointer ${active==="history"?"bg-blue-100":""} `}>
          ⏰ History
        </li>
</NavLink>
      </ul>

    </div>
    

    
    
    )
}

export default Sidebar2;
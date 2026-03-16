import React from "react";

function Sidebar2()
{
    return(
        <div className="w-64 h-screen bg-gray border-r p-5">

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

        <li className="flex items-center gap-3 p-3 rounded-md bg-blue-100 text-green-00 cursor-pointer">
          📊 Dashboard
        </li>

        <li className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-100 cursor-pointer">
          🔍 Browse Books
        </li>

        <li className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-100 cursor-pointer">
           📖My Books
        </li>

        <li className="flex items-center gap-3 p-3 rounded-md hover:bg-blue-100 cursor-pointer">
          ⏰ History
        </li>

      </ul>

    </div>
    

    
    
    )
}

export default Sidebar2;
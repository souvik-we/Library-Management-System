import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../ui/Sidebar";
function Layout() {
  return (
    <div className="flex">

      
      <div className="w-64 h-screen bg-white shadow-lg shadow-gray-500/50 text-white p-4 fixed left-0 top-0">
        {/* Sidebar */}
 <Sidebar/>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-4 bg-stone-50 min-h-screen overflow-y-auto">
        
        <div className="w-full bg-gray-300  text-white p-4">
          <Outlet/>
        </div>

        

      </div>

    </div>
  );
}

export default Layout;
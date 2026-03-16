import React from "react";
import { FaBookOpen } from "react-icons/fa";

function Sidebar()
{
    return(

        <>
        <div className="w-full h-full  flex flex-col space-y-2" >
            <div className="w-full border-b-0.5 border-gray-300 shadow-2xl  h-[15%]  flex space-x-2 ">
              <div className=" h-full w-2/6 flex justify-end items-center">
              <div className="w-5/6 h-16 rounded-md bg-sky-400/40 flex justify-center items-center">
              <FaBookOpen className="text-blue-700 text-3xl" />
              </div>
                </div>  

                 <div className=" h-full w-4/6 flex justify-center items-center">
                  <div className="">
                    <h3 className="text-xl font-semibold tracking-wide text-black">RKMGEC</h3>
                    <h6 className="text-lg font-normal text-black">Admin</h6>
                  </div>

                </div> 
            </div>

            {/* side bar dashboard */}
            <div className="w-full h-[85%] relative ">
              <div className="w-full h-11/12  ">
             
             <div className="w-full h-auto mt-10">
                <button className="w-full h-12 hover:border  hover:border-gray-100 flex justify-around items-center gap-7 text-black text-lg rounded-md hover:bg-blue-400">
                    <span><FaBookOpen/></span> <span className="font-medium tracking-wide">Dashboard</span>
                </button>

                <button className="w-full h-12 hover:border  hover:border-gray-100 flex justify-around items-center gap-7 text-black text-lg rounded-md hover:bg-blue-400">
                    <span><FaBookOpen/></span> <span className="font-medium tracking-wide">Members</span>
                </button>

                <button className="w-full h-12 hover:border  hover:border-gray-100 flex justify-around items-center gap-7 text-black text-lg rounded-md hover:bg-blue-400">
                    <span><FaBookOpen/></span> <span className="font-medium tracking-wide">Books</span>
                </button>

             </div>

              </div>
              <div className="w-full h-20  absolute bottom-0.5 flex justify-center items-end">
                  <button className="w-full h-12 border border-gray-100 rounded-md bg-blue-400">Logout</button>
              </div>


            </div>
            

        </div>
        </>
    )
}

export default Sidebar;
import React from "react";

const Navbar = () =>{
    return(
        <div className="overflow-hidden relative ">
            <div className="flex flex-row items-center fixed top-0 z-50 w-full justify-between bg-[#F3FCFF] p-3 ">
                {/* Container for hamburger and profile */}
                <div className="flex flex-row items-center gap-1 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    {/* svg for profile */}
                    <div className="p-4">
                        <div class="relative w-8 h-8 overflow-hidden bg-[#F3FCFF] rounded-full dark:bg-gray-600">
                            <svg className="absolute w-8 h-8 text-gray-500 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                        </div>
                    </div>
                </div>
                {/* App name */}
                <div className=" cursor-pointer">
                    <a href="#" className="font-semibold text-gray-500 text-3xl "><h4>twishApp</h4></a>
                </div>
                {/* Search bar with icons */}
                <div className="flex ml-2">
                    <form className="max-w-md mx-auto flex w-auto h-auto ">   
                    
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full h-4 p-3 pl-10 pr-12 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 dark:placeholder-gray-400 dark:text-white focus:outline-none focus:border-blue-500" placeholder="Search items..." required />
                            <div className="absolute inset-y-0 end-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-3 h-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"/>
                                </svg>
                            </div>
                            
                        </div>
                    </form>
                </div>


            </div>
        </div>
    )
}

export default Navbar;
const Search = ()=>{
    return(
        <div className="max-w-2xl mx-auto mt-60 bg-gradient-to-l to-[#FFF] from-[#FFE6DD] rounded-lg ">
            {/* Search title */}
            <div className="ml-14 pt-4 pb-3 space-y-1 ">
                <h3 className="text-3xl font-semibold">Search hotels</h3>
                <p className="text-base font-medium">Enjoy hassle free bookings with Cleartrip</p>
            </div>
            {/* Search input */}
            <div className="border rounded-lg p-10 space-y-8  bg-white shadow-lg">
                  <div className="flex items-center border rounded-md">
                    <label htmlFor="Enter_location" className="p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                           <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                           <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                    </label>
                    <input name="Enter_location" id="Enter_location" type="text" placeholder="Enter location" className="w-full rounded-md py-4 focus:outline-none"/>
                  </div>
            {/* from & to */}
                 <div className="flex  justify-between space-x-4">
                     <div className="flex flex-1  rounded-md border p-2 w-fit space-x-2">
                         <div>
                             <input type="date" className="text-lg w-32 focus:outline-none"/>
                         </div>
                         
                         <div>
                             <input type="date" className="text-lg w-32 focus:outline-none"/>
                         </div>
                     </div>
                     <div className="flex flex-1 w-full items-center justify-center border rounded-lg p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                         </svg>

                         <select className="rounded-lg px-4 py-2 w-full focus:outline-none text-lg">
                             <option value="1">1 Room, 1 Guest</option>
                             <option value="2">2 Room, 2 Guest</option>
                             <option value="3">3 Room, 3 Guest</option>
                             <option value="4">4 Room, 4 Guest</option>
                         </select>
                     </div>
                 </div>

                 <div className="flex justify-end">
                    <button className="text-base font-bold bg-[#ff4f17] text-white px-14 py-3 rounded-lg">Search hotels</button>
                 </div>
            </div>
            
        </div>
    )

}

export default Search;
"use client";
import { useState } from "react";

const Search = () => {


  const [location, setLocation] = useState("");
  const [durationOfStay, setDurationOfStay] = useState({
    checkIn: "",
    checkOut: "",
  });
  const [roomGuest, setRoomGuest] = useState("1");
  const handleSearch = () => {
    console.log("Location:", location);
    console.log("Check-in Date:", durationOfStay.checkIn);
    console.log("Check-out Date:", durationOfStay.checkOut);
    console.log("Rooms & Guests:", roomGuest);
};


  return (
    <div className="max-w-5xl bg-gradient-to-l to-[#FFF] from-[#FFE6DD] rounded-2xl mt-5">
      {/* Search title */}
      <div className=" pt-4 pb-3 space-y-1 px-4">
        <h3 className="text-3xl font-semibold">Search hotels</h3>
        <p className="text-base font-medium">Enjoy hassle-free bookings with Cleartrip</p>
      </div>

      {/* Search input */}
      <div className="border rounded-lg p-10 space-y-8 bg-white shadow-lg">
        {/* Location input */}
        <div className="flex items-center border rounded-md">
          <label htmlFor="Enter_location" className="p-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
          </label>
          <input
            name="Enter_location"
            id="Enter_location"
            type="text"
            placeholder="Enter location"
            className="w-full rounded-md py-4 focus:outline-none"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        {/* Check-in & Check-out */}
        <div className="flex justify-between space-x-4">
          <div className="flex flex-1 rounded-md border p-2 w-fit space-x-2">
            <div>
              <input
                type="date"
                className="text-lg w-32 focus:outline-none"
                value={durationOfStay.checkIn}
                onChange={(e) => setDurationOfStay({ ...durationOfStay, checkIn: e.target.value })}
              />
            </div>
            <div>
              <input
                type="date"
                className="text-lg w-32 focus:outline-none"
                value={durationOfStay.checkOut}
                onChange={(e) => setDurationOfStay({ ...durationOfStay, checkOut: e.target.value })}
              />
            </div>
          </div>

          {/* Room & Guest Selection */}
          <div className="flex flex-1 w-full items-center justify-center border rounded-lg p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>

            <select
              name="room_guest"
              id="roomGuest"
              className="rounded-lg px-4 py-2 w-full focus:outline-none text-lg"
              value={roomGuest}
              onChange={(e) => setRoomGuest(e.target.value)}
            >
              <option value="1" className="hover:bg-blue-400">1 Room, 1 Guest</option>
              <option value="2">2 Rooms, 2 Guests</option>
              <option value="3">3 Rooms, 3 Guests</option>
              <option value="4">4 Rooms, 4 Guests</option>
            </select>

            
          </div>
        </div>

        {/* Search Button */}
        <div className="flex justify-end">
          <button onClick={handleSearch} className="text-base font-bold bg-[#ff4f17] text-white px-14 py-3 rounded-lg">
            Search hotels
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;

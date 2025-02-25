import { CalendarIcon, MapPinIcon, UserIcon }  from "lucide-react";

const SearchData = () => {
    return (
        <div className="flex items-center gap-4 border rounded-xl mx-auto p-4 shadow-md w-fit bg-white">
      {/* Location Input */}
      <div className="flex items-center gap-2">
        <MapPinIcon className="h-5 w-5 text-gray-500" />
        <input
          type="text"
          placeholder="Enter location"
          className="outline-none text-gray-800 font-medium"
          
        />
      </div>
      
      {/* Start Date Input */}
      <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
        <CalendarIcon className="h-5 w-5 text-gray-500" />
        <input
          type="date"
          className="outline-none text-gray-800 font-medium"
        />
      </div>
      
      {/* End Date Input */}
      <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
        <CalendarIcon className="h-5 w-5 text-gray-500" />
        <input
          type="date"
          className="outline-none text-gray-800 font-medium"
        />
      </div>
      
      {/* Room & Guests Selection */}
      <div className="flex items-center gap-2 border-l border-gray-300 pl-4">
        <UserIcon className="h-5 w-5 text-gray-500" />
        <select className="outline-none text-gray-800 font-medium">
          <option value="1">1 room, 1 guest</option>
          <option value="2">1 room, 2 guests</option>
          <option value="3">2 rooms, 4 guests</option>
          <option value="4">3 rooms, 6 guests</option>
        </select>
      </div>
    </div>
    )
}
export default SearchData;
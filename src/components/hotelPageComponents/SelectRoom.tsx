const SelectRoomCard = () => {
    return (
      <div className="border rounded-lg p-4 flex justify-between items-center bg-white">
        <div>
          <span className="bg-green-500/40  text-sm font-bold px-2 py-1 rounded-lg">LUXURY DEAL</span>
          <div className="mt-2 text-xl font-bold">₹16,405 <span className="text-gray-500 text-sm">+ ₹3,940 taxes & fees / night</span></div>
          <div className="text-gray-500 line-through text-sm">₹19,300 <span className="text-green-600 font-semibold">15% off</span></div>
          <div className="text-gray-700 text-sm">No cost EMI from ₹6,782</div>
        </div>
        <div className="flex h-full">  
           <button className="bg-[#ff4f17] text-white font-semibold py-3 px-10 rounded-lg">Select room</button>
        </div>
      </div>
    );
  };
  
  export default SelectRoomCard;
  
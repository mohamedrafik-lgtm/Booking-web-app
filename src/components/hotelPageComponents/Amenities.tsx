import { hotelAmenitiesArray } from "@/data/data";

const Amenities = () => {

    console.log(hotelAmenitiesArray)
    return (
        <div className="space-y-10">
            <div className="mt-10">
               <h3 className="text-3xl font-semibold">Amenities</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {hotelAmenitiesArray.slice(0,6).map((amenity) => (
                    <div key={amenity.key} className="flex items-center">
                        <p className="ml-2 font-medium">{amenity.name}</p>
                    </div>
                ))}
                <div className="mt-5">
                    <button className="border border-black w-full py-2 rounded-md font-medium hover:bg-black hover:text-white transition-all duration-300">See all amenities</button>
                </div>
            </div>
            <hr />
        </div>
    )
};

export default Amenities;
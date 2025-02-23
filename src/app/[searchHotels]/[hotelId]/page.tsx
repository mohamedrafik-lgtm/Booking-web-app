import Amenities from "@/components/hotelPageComponents/Amenities";
import Choses from "@/components/hotelPageComponents/Choses";
import { General } from "@/components/hotelPageComponents/General";
import PropertyRules from "@/components/hotelPageComponents/PropertyRules";
import SelectRoomCard from "@/components/hotelPageComponents/SelectRoom";
import img from "@/images/hotels slider img/df42e4b4_z (1).webp";

interface SearchHotelsProps {
    params: { hotelId: string }
}

const HotelPage = ({ params }: SearchHotelsProps) => {
    console.log(params.hotelId);

    return (
        <div>
            <div className="flex space-x-6 w-8/12 mx-auto mt-14 p-4 border border-gray-200 rounded-2xl shadow-md bg-white">
                <div className="flex-1 space-y-6">
                    <General />
                    <p className="text-sm opacity-70">AI generated highlights from recent guest reviews</p>
                    <Choses />
                    <hr />
                    <Amenities />
                    <PropertyRules />
                </div>
                <div className="flex-1  ">
                    <div className="sticky top-3 space-y-3">
                        <img src={img.src} alt="logo" className="w-full h-full object-cover rounded-lg" loading="lazy" />
                       <SelectRoomCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HotelPage;

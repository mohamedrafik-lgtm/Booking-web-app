import Amenities from "@/components/hotelPageComponents/Amenities";
import Choses from "@/components/hotelPageComponents/Choses";
import CleartripRatings from "@/components/hotelPageComponents/CleartripRatings";
import { General } from "@/components/hotelPageComponents/General";
import PropertyRules from "@/components/hotelPageComponents/PropertyRules";
import SelectRoomCard from "@/components/hotelPageComponents/SelectRoom";
import img from "@/images/hotels slider img/df42e4b4_z (1).webp";
import Comment from "@/components/hotelPageComponents/Comment";
import Footer from "@/components/Footer";
interface SearchHotelsProps {
    params: { hotelId: string }
}

const HotelPage = ({ params }: SearchHotelsProps) => {
    console.log(params.hotelId);

    return (
        <div>
        <div>
            <div className="w-8/12 mx-auto mt-14 p-4 border border-gray-200 rounded-2xl shadow-md bg-white space-y-16">
                <div className="flex space-x-6">
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
                <div >
                    <CleartripRatings />
                </div>
                <div className="space-y-6 ">
                    <div>
                        <h3 className="text-2xl font-semibold">Reviews</h3>
                    </div>
                    <div className="flex gap-4 relative">
                      <Comment/>
                      <Comment/>
                      <Comment/>
                      <button className="absolute top-1/3 mt-7 -left-5 p-2 bg-white rounded-full shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button className="absolute top-1/3 mt-7 -right-5 p-2 bg-white rounded-full shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                    <div className="max-w-60 flex items-center">
                        <button className="border w-full py-2 border-black font-medium rounded-lg hover:text-white hover:bg-black transition-all duration-300">Read All reviews</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default HotelPage;

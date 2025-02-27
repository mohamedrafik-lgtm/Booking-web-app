import Footer from "@/components/Footer";
import HotelCart from "@/components/hotels_Component/searchHotels/HotelCart";
import Filter from "@/components/shared/Filter";
import SearchData from "@/components/shared/SearchData";
interface SearchHotelsProps {
    params: { searchHotels: string }
}
const SearchHotels =async ({params}:SearchHotelsProps) => {
    const location =params.searchHotels;
    return (
        <div>
            <div className="max-w-7xl mx-auto flex space-x-7 py-4">
                <Filter/>
                <div>
                    <SearchData/>
                    <h1 className="text-2xl font-semibold mt-5">Showing hotels in {location}</h1>
                    <div className="grid grid-cols-3 gap-5 py-5">
                        <HotelCart/>
                        <HotelCart/>
                        <HotelCart/>
                        <HotelCart/>
                        <HotelCart/>
                        <HotelCart/>
                        <HotelCart/>
                        <HotelCart/>
                        <HotelCart/>
                        <HotelCart/>
                   </div>
               </div>
            </div>
            <Footer/>
        </div>
    )
}
export default SearchHotels;
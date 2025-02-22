

interface SearchHotelsProps {
    params: { hotelId: string }
}
const HotelPage = ({params}:SearchHotelsProps) =>{
    
    console.log(params.hotelId);
    return (
        <div>
            <h1>Hotel Page</h1>
        </div>
    )
}

export default HotelPage;
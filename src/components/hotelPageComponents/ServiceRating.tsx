const ServiceRating = ()=>{

    return (
        <div className="p-4 border rounded-lg bg-gradient-to-b from-blue-100 to-white max-w-64 h-full space-y-7">
             <div className="flex items-center justify-between">
                   <h5 className="text-xl font-semibold">Location</h5>
                   <span className="text-2xl font-bold">4.7</span>
             </div>
             <div>
               <p className="text-sm opacity-85">The hotel is located in a beautiful and peaceful area of South Goa, with a private beach 
                and stunning views of the Arabian Sea. It offers a central location, away from the crowds of
                 North Goa, making it a perfect getaway for families.</p>
             </div>
        </div>
    );
} 
export default ServiceRating;
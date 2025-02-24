const RatingDetails = ()=>{
    const ratings = [
        { stars: 5, count: 300 },
        { stars: 4, count: 60 },
        { stars: 3, count: 8 },
        { stars: 2, count: 5 },
        { stars: 1, count: 5 },
      ];
      const totalRatings = ratings.reduce((sum, rating) => sum + rating.count, 0);
      const averageRating = (
        ratings.reduce((sum, rating) => sum + rating.stars * rating.count, 0) / totalRatings
      ).toFixed(1);
    return (
        <div className="p-4 flex space-x-12">
                    
                        <div className="flex flex-col justify-between items-center gap-2">
                             <span className="text-5xl font-bold">{averageRating}</span>
                             <div className="bg-green-100 text-[#3A742C] w-fit text-sm font-semibold px-2 py-1 rounded">
                               VERY GOOD
                             </div>
                        <p className="text-lg font-semibold">{totalRatings}+ ratings</p>
                        </div>
                    
                           <div className="mt-3 space-y-1">
                             {ratings.map((rating) => (
                               <div key={rating.stars} className="flex items-center gap-4">
                                 <span className="w-4 text-sm font-medium">{rating.stars}★</span>
                                 <div className="w-40 h-1 bg-gray-200 rounded">
                                   <div
                                     className="h-full bg-[#ff4f17] rounded"
                                     style={{ width: `${(rating.count / totalRatings) * 100}%` }}
                                   ></div>
                                 </div>
                                 <span className="text-sm font-semibold opacity-65 text-gray-700">{rating.count}</span>
                               </div>
                             ))}
                           </div>
                    </div>
    )
}

export default RatingDetails;
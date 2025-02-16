const ExclusiveBenefits = ()=>{
    return(
        <div className="rounded-lg bg-gradient-to-r to-[#FFF] from-violet-200 p-4 flex items-center justify-between">
            <div className="space-y-1">
                <h3 className="px-2 py-1 text-xs bg-violet-700 text-white w-fit rounded-md">Exclusive Benefits</h3>
                <p className="text-violet-700 text-xl font-semibold">Up to 15% extra off</p>
                <p className="text-sm font-semibold">for Flipkart & Myntra shoppers</p>
            </div>
            <div className="flex items-end">
                <button className="px-3 py-1 border border-black rounded-md font-semibold hover:bg-black hover:text-white transition-all duration-300">Know more</button>
            </div>
        </div>
    )
}

export default ExclusiveBenefits;
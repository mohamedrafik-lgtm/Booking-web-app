export const General = () => {
    return (
        <div className="">
            <div className="space-y-2">
                {/* hotel name */}
                <h1 className="text-3xl font-semibold">Radisson Blu Plaza Delhi Airport</h1>
                <p className="text-lg opacity-65">5-star Hotel · Mahipalpur, Delhi</p>
                <div className="flex space-x-2 items-center">
                    <span className="px-2 py-1 font-semibold text-green-600 bg-green-100 rounded-md">4.2</span> <span className="text-base font-semibold">1k+ ratings</span>
                </div>
            </div>
            <div className="flex space-x-4 mt-8">
                <div className="flex-1 px-5 py-7 border shadow-md rounded-lg justify-center items-center space-y-2">
                    <div className="w-fit mx-auto">
                        <h3 className="text-lg font-medium">Gourmet Haven</h3>
                        <span className="opacity-70">150+ mentions</span>
                    </div>
                   <p className="text-center">Guests rave about the delicious and diverse food options with a variety of cuisines.</p>
                </div>
                <div className="flex-1 space-y-2">
                    <div className="text-center bg-sky-100 border rounded-lg px-4 py-2">
                        <span className="text-sky-600 text-sm">IN THE SPOTLIGHT</span>
                        <p className="text-sky-600 text-base font-semibold">Relaxing·Luxury Pool ·Attentive Staff</p>
                    </div>
                    <div className="border rounded-lg px-4 py-2 flex justify-between items-center">
                      <div className="space-y-2">
                        <p className="text-sm">GREAT FOR</p>
                        <p className="text-xl font-semibold">Business</p>
                        <p className="text-sm">Rated 4.4</p>
                      </div>
                      <div className="bg-violet-100 p-2 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-8 text-violet-600">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                            </svg>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import Search from "@/components/hotels_Component/Search";
import SidePar from "@/components/SidePar";
import Slider from "@/components/shared/Slider";
import Link from "next/link";

import ExclusiveBenefits from "@/components/hotels_Component/ExclusiveBenefits.";
import { images, offers } from "@/data/data";
import BankOffers from "@/components/hotels_Component/BankOffers";
import PopularDestination from "@/components/hotels_Component/PopularDestination";



export default function Home() {

  return (
    <div className="max-w-7xl mx-auto flex pt-7 gap-6">
      {/*  side par */}
      <aside className="w-56">
        <SidePar />
      </aside>
      
      {/*  search and offer slider*/}
      <main className="flex-1">
        <div className="flex gap-6">
          <div className="flex-[2.5] space-y-10">
            <Search />
            <ExclusiveBenefits/>
          </div>
          <div className="flex-[1] space-y-7">
            <Slider content={images} type="image"/>
            <div className="flex justify-between items-center mt-4">
              <h2 className="text-xl font-semibold">More Offers</h2>
              <Link href="#" className="text-sm text-blue-500 font-bold hover:underline">View all</Link>
            </div>
              <Slider content={offers}  type="offer"/>
          </div>
        </div>
        <div className="mt-14 space-y-9">
          {/* main content */}
          <div>
               <BankOffers/>
          </div>
          <div>
            <PopularDestination/>
          </div>
        </div>
      </main>
    </div>
  );
}

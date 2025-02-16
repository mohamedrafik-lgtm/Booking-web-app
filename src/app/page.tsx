import Search from "@/components/Search";
import SidePar from "@/components/SidePar";
import Slider from "@/components/Slider";
import Link from "next/link";
import img from "@/images/sliderimg.webp";
import img2 from "@/images/RR_RBLEMI_H_1106.webp";
import img3 from "@/images/RR_YESEMI_H_0711.webp";
import img4 from "@/images/RR_idfc_H_1106_1.webp";
import img5 from "@/images/RR_kotak_H__11zon.webp";


const offers = [
  { title: "Domestic hotel offer!", description: "Get upto 30% off on hotils", offerCode: "Use coupon code : CTHOTEL", url: "#" },
  { title: "International hotel offers", description: "Get upto 30% off on hotils", offerCode: "Use coupon code : CTHOTEL", url: "#" },
];
export default function Home() {
  const images: string[] = [
      img.src,
      img2.src,
      img3.src,
      img4.src,
      img5.src
    ];
  return (
    <div className="max-w-7xl mx-auto flex pt-7 gap-6">
      {/*  side par */}
      <aside className="w-56 sticky top-20 self-start">
        <SidePar />
      </aside>
      
      {/*  search and offer slider*/}
      <main className="flex-1">
        <div className="flex gap-6">
          <div className="flex-[2.5]">
            <Search />
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
        <div className="mt-6">
          {/* main content */}
          
        </div>
      </main>
    </div>
  );
}

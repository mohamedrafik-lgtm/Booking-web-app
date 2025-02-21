import img from "@/images/sliderimg.webp";
import img2 from "@/images/RR_RBLEMI_H_1106.webp";
import img3 from "@/images/RR_YESEMI_H_0711.webp";
import img4 from "@/images/RR_idfc_H_1106_1.webp";
import img5 from "@/images/RR_kotak_H__11zon.webp";
import { IOfferSlider, ISortInput } from "@/interfaces";

export const offers:IOfferSlider[] = [
    { title: "Domestic hotel offer!", description: "Get upto 30% off on hotils", offerCode: "Use coupon code : CTHOTEL", url: "#" },
    { title: "International hotel offers", description: "Get upto 30% off on hotils", offerCode: "Use coupon code : CTHOTEL", url: "#" },
  ];

export const images: string[] = [
    img.src,
    img2.src,
    img3.src,
    img4.src,
    img5.src
  ];

  export const sortInput: ISortInput[] = [
    { id: "recommended", label: "Recommended" },
    { id: "top-rated", label: "Top-rated" },
    { id: "price-high-low", label: "Price: High to Low" },
    { id: "price-low-high", label: "Price: Low to High" },
  ]

  export const dealsInput: ISortInput[] = [
    { id: "Jackpot", label: "Jackpot" },
    { id: "Luxury Deals", label: "Luxury Deals" },
    { id: "Steal Deals", label: "Steal Deals" }]
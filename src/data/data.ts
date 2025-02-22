import img from "@/images/sliderimg.webp";
import img2 from "@/images/RR_RBLEMI_H_1106.webp";
import img3 from "@/images/RR_YESEMI_H_0711.webp";
import img4 from "@/images/RR_idfc_H_1106_1.webp";
import img5 from "@/images/RR_kotak_H__11zon.webp";
import img6 from "@/images/hotels slider img/image_1332060_fa79e07e-77ba-4703-904a-dcd09c1d3724_proc.webp";
import img7 from "@/images/hotels slider img/image_41203_b9d29a0b-50ff-4a82-8b72-ee699cc43adc_proc.webp";
import img8 from "@/images/hotels slider img/image_41203_f9ad291b-d7fa-46d8-b2d0-64ee2c378125_proc.webp";
import img9 from "@/images/hotels slider img/image_41203_f9cd3e65-99db-4535-b109-cbc8e3320581_proc.webp";
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

  export const imgList: string[] = [
    img6.src,
    img7.src,
    img8.src,
    img9.src
  ];

  export const sortInput: ISortInput[] = [
    { id: "Sea view", label: "Sea view", name:"Sea view" },
    { id: "4_stars", label: "4 stars" , name:"4-stars"},
    { id: "Private-pool", label: "Private pool", name:"Private-pool" },
    { id: "Hotels", label: "Hotels", name:"Hotels" },
    { id: "Restaurant", label: "Restaurant", name:"Restaurant" },
    { id: "Wonderful:9+", label: "Wonderful: 9+", name:"Wonderful:9+" },
    { id: "Spa", label: "Spa", name:"Spa" },
    { id: "Air-conditioning", label: "Air conditioning", name:"Air-conditioning" },
  ]

  export const dealsInput: ISortInput[] = [
    { id: "Jackpot", label: "Jackpot", name:"jackpot" },
    { id: "Luxury Deals", label: "Luxury Deals", name:"luxury-deals" },
    { id: "Steal Deals", label: "Steal Deals", name:"steal-deals" },
  ];

  export const starCategory: ISortInput[] = [
    { id: "5star", label: "5 Star", name:"5star" },
    { id: "4star", label: "4 Star", name:"4star" },
    { id: "3star", label: "3 Star", name:"3star" },
  ];

  export const guestRatings: ISortInput[] = [
    { id: "4.5&above", label: "4.5 & above" , name:"4.5&above"},
    { id: "4&above", label: "4 & above" , name:"4&above"},
    { id: "3.5&above", label: "3.5 & above" , name:"3.5&above"},
    { id: "3&above", label: "3 & above" , name:"3&above"},
  ];

  export const propertyType: ISortInput[] = [
    { id: "Apartments", label: "Apartments" , name:"Apartments"},
    { id: "Hotels", label: "Hotels" , name:"Hotels"},
    { id: "Villas", label: "Villas" , name:"Villas"},
    { id: "Resorts", label: "Resorts" , name:"Resorts"},
    { id: "Chalets", label: "Chalets" , name:"Chalets"},
    { id: "Guesthouses", label: "Guesthouses" , name:"Guesthouses"},
    { id: "Homestays", label: "Homestays" , name:"Homestays"},
    { id: "BedAndBreakfasts", label: "Bed and Breakfasts" , name:"BedAndBreakfasts"},
    { id: "Boats", label: "Boats" , name:"Boats"},
    { id: "ResortVillages", label: "Resort Villages" , name:"ResortVillages"},
    { id: "Motels", label: "Motels" , name:"Motels"},
    { id: "LuxuryTents", label: "Luxury tents" , name:"LuxuryTents"},

  ];
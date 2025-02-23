import img from "@/images/sliderimg.webp";
import img2 from "@/images/RR_RBLEMI_H_1106.webp";
import img3 from "@/images/RR_YESEMI_H_0711.webp";
import img4 from "@/images/RR_idfc_H_1106_1.webp";
import img5 from "@/images/RR_kotak_H__11zon.webp";
import img6 from "@/images/hotels slider img/image_1332060_fa79e07e-77ba-4703-904a-dcd09c1d3724_proc.webp";
import img7 from "@/images/hotels slider img/image_41203_b9d29a0b-50ff-4a82-8b72-ee699cc43adc_proc.webp";
import img8 from "@/images/hotels slider img/image_41203_f9ad291b-d7fa-46d8-b2d0-64ee2c378125_proc.webp";
import img9 from "@/images/hotels slider img/image_41203_f9cd3e65-99db-4535-b109-cbc8e3320581_proc.webp";
import { Amenity, HotelAmenities, IOfferSlider, ISortInput, PropertyRule } from "@/interfaces";

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
    img7.src,
    img6.src,
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

  export const hotelAmenities: HotelAmenities = {
    important: {
      wifi: true,
      security24h: true,
      fastCheckIn: true,
      soundproofRooms: false,
      accessibility: true,
      freeParking: false,
      strategicLocation: true
    },
    activities: {
      swimmingPool: true,
      gym: true,
      spa: true,
      tennisCourt: false,
      golfCourse: false,
      tours: true,
      bikeRental: true,
      gameRoom: false,
      liveEntertainment: true
    },
    services: {
      roomService: true,
      laundry: true,
      concierge: true,
      airportShuttle: false,
      carRental: true,
      babysitting: false,
      currencyExchange: true
    },
    generalAmenities: {
      lobbyLounge: true,
      shoppingArea: false,
      meetingRooms: true,
      library: false,
      smokingArea: false,
      beautySalon: true,
      familyRooms: true
    },
    foodAndBeverages: {
      multiCuisineRestaurant: true,
      buffet: true,
      cafes: true,
      inRoomDining: false,
      poolsideBar: true,
      specialDietOptions: true
    },
    business: {
      conferenceHalls: true,
      privateOffices: false,
      printingServices: true,
      highSpeedWifi: true,
      eventPlanning: false,
      secretaryServices: false
    }
  };
  


 export  const hotelAmenitiesArray: Amenity[] = [
    { category: "Important", name: "WiFi", key: "wifi", available: true },
    { category: "Important", name: "24h Security", key: "security24h", available: true },
    { category: "Important", name: "Fast Check-In", key: "fastCheckIn", available: true },
    { category: "Important", name: "Soundproof Rooms", key: "soundproofRooms", available: false },
    { category: "Important", name: "Accessibility Features", key: "accessibility", available: true },
    { category: "Important", name: "Free Parking", key: "freeParking", available: false },
    { category: "Important", name: "Strategic Location", key: "strategicLocation", available: true },
  
    { category: "Activities", name: "Swimming Pool", key: "swimmingPool", available: true },
    { category: "Activities", name: "Gym", key: "gym", available: true },
    { category: "Activities", name: "Spa", key: "spa", available: true },
    { category: "Activities", name: "Tennis Court", key: "tennisCourt", available: false },
    { category: "Activities", name: "Golf Course", key: "golfCourse", available: false },
    { category: "Activities", name: "Tours", key: "tours", available: true },
    { category: "Activities", name: "Bike Rental", key: "bikeRental", available: true },
    { category: "Activities", name: "Game Room", key: "gameRoom", available: false },
    { category: "Activities", name: "Live Entertainment", key: "liveEntertainment", available: true },
  
    { category: "Services", name: "Room Service", key: "roomService", available: true },
    { category: "Services", name: "Laundry", key: "laundry", available: true },
    { category: "Services", name: "Concierge", key: "concierge", available: true },
    { category: "Services", name: "Airport Shuttle", key: "airportShuttle", available: false },
    { category: "Services", name: "Car Rental", key: "carRental", available: true },
    { category: "Services", name: "Babysitting", key: "babysitting", available: false },
    { category: "Services", name: "Currency Exchange", key: "currencyExchange", available: true },
  
    { category: "General Amenities", name: "Lobby Lounge", key: "lobbyLounge", available: true },
    { category: "General Amenities", name: "Shopping Area", key: "shoppingArea", available: false },
    { category: "General Amenities", name: "Meeting Rooms", key: "meetingRooms", available: true },
    { category: "General Amenities", name: "Library", key: "library", available: false },
    { category: "General Amenities", name: "Smoking Area", key: "smokingArea", available: false },
    { category: "General Amenities", name: "Beauty Salon", key: "beautySalon", available: true },
    { category: "General Amenities", name: "Family Rooms", key: "familyRooms", available: true },
  
    { category: "Food & Beverages", name: "Multi-Cuisine Restaurant", key: "multiCuisineRestaurant", available: true },
    { category: "Food & Beverages", name: "Buffet", key: "buffet", available: true },
    { category: "Food & Beverages", name: "Cafés", key: "cafes", available: true },
    { category: "Food & Beverages", name: "In-Room Dining", key: "inRoomDining", available: false },
    { category: "Food & Beverages", name: "Poolside Bar", key: "poolsideBar", available: true },
    { category: "Food & Beverages", name: "Special Diet Options", key: "specialDietOptions", available: true },
  
    { category: "Business", name: "Conference Halls", key: "conferenceHalls", available: true },
    { category: "Business", name: "Private Offices", key: "privateOffices", available: false },
    { category: "Business", name: "Printing Services", key: "printingServices", available: true },
    { category: "Business", name: "High-Speed WiFi", key: "highSpeedWifi", available: true },
    { category: "Business", name: "Event Planning", key: "eventPlanning", available: false },
    { category: "Business", name: "Secretary Services", key: "secretaryServices", available: false }
  ];
  
  export const propertyRulesSchema: PropertyRule<boolean | string[]>[] = [
    // 🟢 Guest Profile
    { key: "minAgeRestriction", name: "Guests below 18 years of age NOT allowed", category: "Guest Profile", type: "boolean", required: false, defaultValue: false },
    { key: "childrenAllowed", name: "Children allowed", category: "Guest Profile", type: "boolean", required: false, defaultValue: true },
    { key: "unmarriedCouplesAllowed", name: "Unmarried couples are allowed", category: "Guest Profile", type: "boolean", required: false, defaultValue: true },
    { key: "bachelorsAllowed", name: "Bachelors are allowed", category: "Guest Profile", type: "boolean", required: false, defaultValue: true },
  
    // 🍽️ Food & Beverages
    { key: "alcoholAllowed", name: "Alcohol consumption allowed within the premises", category: "Food & Beverages", type: "boolean", required: false, defaultValue: false },
    { key: "outsideFoodAllowed", name: "Food from outside allowed within the premises", category: "Food & Beverages", type: "boolean", required: false, defaultValue: true },
    { key: "nonVegAllowed", name: "Non-Veg allowed within the premises", category: "Food & Beverages", type: "boolean", required: false, defaultValue: true },
  
    // 🏨 Check-in Check-out Policy
    { key: "acceptableIDProofs", name: "Acceptable ID Proofs", category: "Check-in Check-out Policy", type: "array", required: false, defaultValue: ["Aadhar", "Passport", "Drivers License"] },
    { key: "galaDinnerCharges", name: "Mandatory gala dinner charges on Christmas/New Year", category: "Check-in Check-out Policy", type: "boolean", required: false, defaultValue: false },
  
    // 🚫 Restrictions
    { key: "petsAllowed", name: "Pets NOT allowed within the premises", category: "Restrictions", type: "boolean", required: false, defaultValue: false },
    { key: "smokingAllowed", name: "Smoking allowed within the premises", category: "Restrictions", type: "boolean", required: false, defaultValue: true },
    { key: "privatePartiesAllowed", name: "Private parties or events are allowed at the property", category: "Restrictions", type: "boolean", required: false, defaultValue: true },
  
    // 💳 Payment Policy
    { key: "paymentMethods", name: "Payment Methods", category: "Payment Policy", type: "array", required: false, defaultValue: ["Debit Card", "Credit Card (VISA & Mastercard)"] },
  
    // 🔒 Safety & Security
    { key: "quarantineProtocol", name: "Government aligned quarantine protocol being followed", category: "Safety & Security", type: "boolean", required: false, defaultValue: true },
    { key: "hygieneGuidelines", name: "Property staff understands all hygiene guidelines", category: "Safety & Security", type: "boolean", required: false, defaultValue: true },
    { key: "feverCheck", name: "Guests who have fever are not allowed", category: "Safety & Security", type: "boolean", required: false, defaultValue: true }
  ];
  
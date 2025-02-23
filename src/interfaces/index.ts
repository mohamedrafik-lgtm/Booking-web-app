export interface IOfferSlider{
    title:string,
    description:string,
    offerCode:string,
    url:string
}
export interface ISortInput{
    id:string,
    label:string,
    name:string
}

type AmenitiesCategory = {
    [key: string]: boolean;
  };
  
 export type HotelAmenities = {
    important: AmenitiesCategory;
    activities: AmenitiesCategory;
    services: AmenitiesCategory;
    generalAmenities: AmenitiesCategory;
    foodAndBeverages: AmenitiesCategory;
    business: AmenitiesCategory;
  };
  
  export type Amenity = {
    category: string;
    name: string;
    key: string;
    available: boolean;
  };
  
  export type PropertyRule<T> = {
    key: string; 
    name: string; 
    category: "Guest Profile" | "Food & Beverages" | "Check-in Check-out Policy" | "Restrictions" | "Payment Policy" | "Safety & Security";
    type: "boolean" | "string" | "array"; 
    required: boolean; 
    defaultValue?: T;
  };
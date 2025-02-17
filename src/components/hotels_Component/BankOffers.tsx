import img from "@/images/offers/BSB_ YESEMI_Hotels_11zon.webp";
import img2 from "@/images/offers/BSB_botd_oyo_H_1907_1.webp";
import img3 from "@/images/offers/BSB_kotak (1)_11zon.webp";
const BankOffers = ()=>{
    return (
        <div className="flex justify-between">
            <div>
                <img src={img3.src} alt="offer" className="h-40 w-80 object-fill cursor-pointer" loading="lazy"/>
            </div>
            <div>
                <img src={img2.src} alt="offer" className="h-40 w-80 object-fill cursor-pointer" loading="lazy"/>
            </div>
            <div>
                <img src={img.src} alt="offer" className="h-40 w-80 object-fill cursor-pointer" loading="lazy"/>
            </div>
        </div>
    
    )
}


export default BankOffers;
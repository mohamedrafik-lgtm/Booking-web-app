import Image from "next/image"
import img from '@/images/userimg/Screenshot 2025-02-25 100201.png'
const UserMassage = ()=>{
    return (
        <div className="px-4 py-2.5 border-b flex items-center gap-3">
            {/* user image */}
            <div>
                <Image src={img.src} alt={"user image"} width={49} height={49} className="rounded-full"/>
            </div>
             {/* last massage and username*/}
            <div className="flex w-full justify-between">
             <div>
                <span className="font-medium">mohamed rafik</span>
                <p className="opacity-75">hello mohamed ho are you</p>
             </div>
             <div>
                <p>7:35 AM</p>
             </div>
            </div>
        </div>
    );
}
export default UserMassage;
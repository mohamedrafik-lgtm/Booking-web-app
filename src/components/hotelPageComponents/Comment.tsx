import Image from 'next/image';
import img from "@/images/userimg/Screenshot 2025-02-25 100201.png"
const Comment = () =>{

    return (
        <div className="p-4 border rounded-lg  space-y-5">
          <div className='flex gap-6'>
              <Image src={img.src} alt="logo" width={50} height={50} className="rounded-full" />
              <div>
                    <span className='font-semibold'>mohamed</span>
                    <p className='opacity-75'>🇪🇬 Egypt</p>
              </div>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt accusantium sed autem tempora voluptatum magnam maiores vero. Illo consequuntur nesciunt possimus expedita. Quo beatae aspernatur quibusdam rem quas laborum animi suscipit 
                ...</p>
          </div>
          <div>
             <span className='text-blue-500 text-lg cursor-pointer'>See More ...</span>
          </div>
        </div>
    )
}
export default Comment;
import img1 from "@/images/popular destinations/04700fee1bd68a2a23466eb92c933ff8.jpg";
import img2 from "@/images/popular destinations/087c746aafb2886926e36fc7adf85342.jpg";
import img3 from "@/images/popular destinations/647bd05e0c34a3def360e8125d56e96b.jpg";
import img4 from "@/images/popular destinations/89162a95810e0854b6217cdd594d3d31.jpg";
import img5 from "@/images/popular destinations/d1492fcbf2819b38a6a233aeb1e5bd5f.jpg";
const PopularDestination = () =>{

    return(
        <div className="space-y-8 mb-11">
            <div>
                 <h1 className="text-3xl font-medium">Popular destination</h1>
            </div>

            <div className="flex justify-between ">
                 <div className="rounded-md p-3 flex flex-col justify-end"
                  style={{
                    backgroundImage: `url(${img1.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '235px',
                    width:"184px"
                  }}>
                     <h3 className="text-white font-medium text-2xl">France</h3>
                     <p className="text-white  text-basel">632 property</p> 
                 </div>

                 <div className="rounded-md p-3 flex flex-col justify-end"
                  style={{
                    backgroundImage: `url(${img2.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '235px',
                    width:"184px"
                  }}>
                       <h3 className="text-white font-medium text-2xl">Bali</h3>
                       <p className="text-white  text-basel">732 property</p> 
                 </div>

                 <div className="rounded-md p-3 flex flex-col justify-end"
                 style={{
                    backgroundImage: `url(${img3.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '235px',
                    width:"184px"
                  }}>
                    <h3 className="text-white font-medium text-2xl">Maldives</h3>
                    <p className="text-white  text-basel">4032 property</p> 
                 </div>
                 <div className="rounded-md p-3 flex flex-col justify-end"
                 style={{
                    backgroundImage: `url(${img4.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '235px',
                    width:"184px"
                  }}>
                        <h3 className="text-white font-medium text-2xl">Luxor</h3>
                        <p className="text-white  text-basel">8032 property</p> 
                 </div>

                 <div  className="rounded-md p-3 flex flex-col justify-end"
                 style={{
                    backgroundImage: `url(${img5.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '235px',
                    width:"184px"
                  }}>
                    <h3 className="text-white font-medium text-2xl">Italy</h3>
                    <p className="text-white  text-basel">532 property</p> 
                 </div>
            </div>
        </div>
    )
}

export default PopularDestination;
import RegisterForm from '@/components/RegisterForm';
import registerBackground from '@/images/registerbackground.jpg';
import Link from 'next/link';

const Register = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex w-8/12 h-5/6 rounded-lg bg-orange-500 p-4 shadow-md shadow-slate-200">
         <div
            className="flex-1 rounded-l-md rounded-r-md p-8 flex flex-col justify-between"
            style={{
              backgroundImage: `url(${registerBackground.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
         >
            <h2 className="text-white text-2xl font-semibold">Enjoy your vacation here</h2>
           <p className="text-white text-2xl font-bold mt-2 tracking-wide text-center">
                <span className="block">Discover amazing</span> places at exclusive deals. Enjoy luxurious vacation
            </p>
          </div>

        <div className='flex-1 py-24 space-y-14 mt-5'>
            <div className="w-full px-10 text-white flex flex-col space-y-2">
              <h1 className="text-6xl font-bold mb-4 mx-auto">Create an account</h1>
              <span className='opacity-60 ml-4'>Already have an account? <Link href="login" className='underline-offset-1'>Login</Link></span>
            </div>
            <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;

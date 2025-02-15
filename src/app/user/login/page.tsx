import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen flex justify-center items-center px-4">
      <div className="border rounded-md w-full max-w-7xl  h-auto md:h-5/6 flex flex-col md:flex-row shadow-md shadow-slate-200">
        <div className="flex-1 grid py-16 md:py-24 justify-around">
          <div className="flex justify-center items-center">
            <h2 className="text-3xl md:text-4xl font-semibold">Login</h2>
          </div>
          <div className="px-4 md:px-0">
            <LoginForm />
          </div>
        </div>

        <div className="flex-1 flex flex-col h-full rounded-b-md md:rounded-r-md md:rounded-bl-none bg-orange-500 text-center">
          <div className="text-left flex mt-8 ml-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="4"
              stroke="currentColor"
              className="w-8 h-8 text-white"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <h1 className="text-white text-2xl font-semibold ml-2">Cleartrip</h1>
          </div>

          <div className="flex-1 flex flex-col justify-center items-center mb-8">
            <div className="flex gap-8 md:gap-16 absolute opacity-30">
              <div className="rounded-full w-12 h-48 md:w-16 md:h-96 rotate-45 bg-gradient-to-l from-white to-transparent"></div>
              <div className="rounded-full w-12 h-48 md:w-16 md:h-96 rotate-45 bg-gradient-to-l from-white to-transparent"></div>
              <div className="rounded-full w-12 h-48 md:w-16 md:h-96 rotate-45 bg-gradient-to-l from-white to-transparent"></div>
            </div>
            <div className="z-10 px-4">
              <h1 className="text-white text-3xl md:text-5xl font-semibold">
                KEEP AN EYE ON YOUR KPI
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

"use client";

const RegisterForm = () => { 
    return (
        <form className="flex flex-col justify-center items-center w-full px-16 ">
            <div className="flex space-x-2 w-full">
               <div className="flex-1">
                   <input 
                       type="text" 
                       id="firstName" 
                       name="firstName" 
                       className=" p-2 rounded-md w-full bg-orange-300/30 focus:outline-orange-300 text-white placeholder-white" 
                       placeholder="First Name" 
                   />
               </div>
               <div className="flex-1">
                   <input 
                       type="text" 
                       id="lastName" 
                       name="lastName" 
                       className="p-2 rounded-md w-full focus:outline-orange-300 bg-orange-300/30 text-white placeholder-white" 
                       placeholder="Last Name" 
                   />
               </div>
            </div>
            <div className="w-full mt-4">
                <input
                    type="text" 
                    id="email"
                    name="email"
                    className="p-2 rounded-md w-full focus:outline-orange-300 bg-orange-300/30 text-white placeholder-white"
                    placeholder="Email"
                />
            </div> 
            <div className="w-full mt-4">
                <input 
                type="password" 
                name="password"
                id="password"
                className=" p-2 rounded-md w-full focus:outline-orange-300 bg-orange-300/30 text-white placeholder-white" 
                placeholder="Password"/>
            </div>

            <div className="w-full mt-4">
                <button
                    type="submit"
                    className="text-base font-semibold p-2 rounded-md w-full mt-4 text-white bg-orange-600/55 border border-white"
                >
                    Create Account
                </button>
            </div>
            <div className="w-full mt-4 flex items-center">
               <div className="flex-1 h-0.5 bg-white"></div>
               <span className="mx-4 text-lg whitespace-nowrap text-white">or register with</span>
               <div className="flex-1 h-0.5 bg-white"></div>
            </div>

            <div className="w-full mt-4 flex space-x-4">
                <button
                    type="submit"
                    className="p-2 rounded-md w-full mt-4 text-white flex items-center justify-center bg-orange-300/30">
                    <svg role="img" viewBox="0 0 24 24" width={25} className="mr-2" xmlns="http://www.w3.org/2000/svg">
                      <title>Google</title>
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" fill="#ffffff"/>
                    </svg>
                    Google
                </button>
                <button
                    type="submit"
                    className="p-2 rounded-md w-full mt-4 flex items-center justify-center text-white bg-orange-300/30"
                >
                 <svg role="img" width={25} className="mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                   <title>Facebook</title>
                   <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" fill="#ffffff"/>
                 </svg>                  
                   Facebook
                </button>
            </div>

        </form>
    );
}

export default RegisterForm;

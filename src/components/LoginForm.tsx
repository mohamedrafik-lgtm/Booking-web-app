"use client";

import { useState } from "react";


interface LoginData {
    username: string;
    password: string;
}
const LoginForm = () => {
   
    const [loginData,setLoginData] = useState<LoginData>({
        username: "",
        password: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    
    return (
        <form className="w-80 space-y-10">
             <div className="space-y-3">
                 <div className="flex flex-col">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleChange} value={loginData.username} type="text" id="username" name="username" className="border p-2 rounded-full focus:outline-orange-300" placeholder="Enter Username"/>
                 </div>
                 <div className="flex flex-col w-full">
                    <label htmlFor="password">Password</label>
                    <input onChange={handleChange} value={loginData.password} type="password" id="password" name="password" className="border p-2 rounded-full focus:outline-orange-300" placeholder="Enter Password"/>
                 </div>
            </div>
             <div>
                <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded-full text-lg font-semibold">Login</button>
             </div>
        </form>
    )
}

export default LoginForm;
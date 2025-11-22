import SignIn from "@/components/auth/SignIn";
import SignUp from "@/components/auth/SignUp";
import { useState } from "react"


export default function Auth() {

    const [isLogInView,setIsLogInView] = useState(true);
  return (
    <div className="flex flex-auto flex-col min-h-screen h-full">
        <div className="flex h-full flex-col justify-center items-center bg-white">
            <h3 className="text-3xl font-bold">Welcome</h3>
            <div className="mt-4">
                {
                    isLogInView ? <SignIn /> : <SignUp />
                }
            </div>
            <button 
                className="bg-black mt-6 text-white font-extralight rounded p-3 border-none cursor-pointer"
                onClick={()=>setIsLogInView(!isLogInView)}
            >
                {
                    isLogInView ? 'Switch to Sign Up' : 'Switch to Sign In'
                }
            </button>
        </div>
    </div>
  )
}

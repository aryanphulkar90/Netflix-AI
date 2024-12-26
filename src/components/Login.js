import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const[isSignInForm, setIsSignInForm] = useState(false)
  const handleToggle = () =>{
    (isSignInForm==false) ? setIsSignInForm(true) : setIsSignInForm(false)
  }
  return (
    <div className="relative">
        <Header/>
        <div className="absolute">
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg'
                alt='Logo'/>
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
            <h1 className="font-bold text-3xl py-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && <input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700 rounded-lg text-sm"/>}
            <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700 rounded-lg text-sm"/>
            <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700 rounded-lg text-sm"/>
            <button className="bg-red-600 p-2 my-6 w-full rounded-lg">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className="p-4 text-sm" onClick={handleToggle}> 
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login
import React, { useRef, useState } from 'react'
import Header from './Header'
import { handleValidation } from '../utils/validate'
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()
  const email = useRef(null)
  const password = useRef(null)
  const name = useRef(null)

  const handleToggle = () =>{
    (isSignInForm===false) ? setIsSignInForm(true) : setIsSignInForm(false)
  }

  const handleButtonClick = () =>{
     const message = handleValidation(email.current.value, password.current.value)
     setErrorMessage(message)
     if(message) return;
     
     if(!isSignInForm)
     {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value
              }).then(() => {
                const {uid, email, displayName} = auth.currentUser;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName}))
              }).catch((error) => {
                setErrorMessage(error.message)
              })

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + " - " + errorMessage)
        });
     }
     else
     {
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage)
        });
      
     }

  }

  return (
    <div className="relative">
        <Header/>
        <div className="absolute">
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/aa9edac4-a0e6-4f12-896e-32c518daec62/web/IN-en-20241223-TRIFECTA-perspective_1502c512-be5f-4f14-b21a-e3d75fe159ab_large.jpg'
                alt='Logo'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="px-9 py-6 w-3/12 absolute bg-black my-24 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
            <h1 className="font-bold text-2xl py-4">
                {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && <input ref={name} type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-700 rounded-lg text-xs"/>}
            <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-700 rounded-lg text-xs"
                   ref={email}/>
            <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-700 rounded-lg text-xs"
                   ref={password}/>
            <button className="bg-red-600 p-2 my-6 w-full rounded-lg text-xs"
                    onClick={handleButtonClick}
            >
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            {(errorMessage) && <p className="text-red-700 py-2 px-4 font-bold text-sm">{errorMessage}</p>}
            <p className="py-2 cursor-pointer text-xs" onClick={handleToggle}> 
                {isSignInForm ? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}
            </p>
        </form>
    </div>
  )
}

export default Login
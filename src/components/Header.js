import React, {useEffect} from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged  } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { LOGO, USER_AVATAR } from '../utils/constants';

const Header = () => {

  const navigate = useNavigate()
  
  const dispatch = useDispatch()
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName}))
        navigate("/browse")
      } else {
         dispatch(removeUser())
         navigate("/")
      }
    })

    return () => unsubscribe()
  },[])

  const user = useSelector((store)=>store.user)

  const handleSignOut = () => {
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
    
  }
  return (
    <div className="flex absolute px-8 bg-gradient-to-b from-black z-10 w-full justify-between">
        <img src = {LOGO}
         alt='logo'
         className="w-40"
         />
         {user && <div className="flex">
           <img
             className="w-10 h-10 m-3"
             alt="userIcon"
             src = {USER_AVATAR}
           />
           <button 
                className="text-white m-1 font-bold text-sm"
                onClick={handleSignOut}
           >Sign Out</button>
         </div>}
    </div>
  )
}

export default Header
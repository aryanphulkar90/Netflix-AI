import React, {useEffect} from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { onAuthStateChanged  } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice'
import { useDispatch } from 'react-redux'
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate()
  
  const dispatch = useDispatch()
  
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)

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

  const handleGptSearchClick = () =>{
      dispatch(toggleGptSearchView())
  }
  
  const handleLanguageChange = (e) =>{
     dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="flex absolute px-8 bg-gradient-to-b from-black z-10 w-full justify-between">
        <img src = {LOGO}
         alt='logo'
         className="w-60 h-25"
         />
         {user && <div className="flex text-white">
            {showGptSearch && <select className="h-10 my-6 mx-4 bg-black opacity-50 z-10 p-2"
                    onChange={handleLanguageChange}>
               {SUPPORTED_LANGUAGES.map((language)=> (
                <option key={language.identifier} value={language.identifier}>{language.name}</option>
              ))} 
            </select>}
           <img
             className="w-16 h-16 m-4"
             alt="userIcon"
             src = {USER_AVATAR}
           />
           <button
              className="bg-purple-900 text-white px-3 mt-8 mx-5 h-10 text-md rounded-md"
              onClick={handleGptSearchClick}
           >
           { (showGptSearch) ? "Home" : "GPT Search"}
           </button>
           <button 
                className="text-white m-1 text-md font-bold"
                onClick={handleSignOut}
           >Sign Out</button>
         </div>}
    </div>
  )
}

export default Header
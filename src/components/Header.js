import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)
  const [browseState, setBrowseState] = useState(false);
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  };

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(
          addUser({
            uid:uid, 
            email:email,
            displayName:displayName
          })
        );
        if(window.location.pathname==="/")
        {navigate("/browse");
        setBrowseState(true);
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
    
   },[]) 

  const handleGptSearchClick=()=>{
    //Toggle GPT Search
    dispatch(toggleGptSearchView());

  } 

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value));
  }

  

  return (
    
    <div className='absolute w-screen px-4 py-1 z-10 flex flex-col md:flex-row justify-between  '>
      


        {/* <img 
       className="w-44 h-35"
        src={require("./logo2.jpeg")} alt="logo" 
        /> */}
    
      {/* <img className='w-52' 
      // src="src/components/movieGptLogo.png"
      //src="C:/Users/Hp/Desktop/movielogo1.png"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt = "logo"/>  */}

      <h1 className='mx-auto md:mx-0 font-sans tracking-tight text-6xl px-4 py-2 text-red-600 font-bold'>MovieGPT</h1>


      {user && (<div className='flex p-2 justify-between'>
        
        {showGptSearch && (<select className='py-2 px-4 mx-4 my-2 rounded bg-gray-900 text-white' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang)=>(
            <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
          ))}
        </select>)}
        {browseState ?
        <button onClick={handleGptSearchClick} className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded'>
          {showGptSearch? "Homepage":"GPT Search"}
          </button>:(<button onClick={navigate("/browse")} className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded'>"Homepage"</button>)}
        <img className='hidden md:block w-20' alt="usericon" src='https://images.ctfassets.net/4cd45et68cgf/1pFUjCo5EKjZp9SMoSIsmq/f66c53a4473233fa73f5820bc8a04d8a/NFLX_Profile_10Yrs.jpg?w=2000'></img>
        <button onClick={handleSignOut} className='font-bold text-white '>(Sign Out)</button>      
      </div>)}
    </div>
    
   
  )
}

export default Header

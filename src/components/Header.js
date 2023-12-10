import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
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
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
    
   },[])
  return (
    
    <div className='absolute w-screen px-4 py-1 z-10 flex justify-between'>
      
        {/* <img 
       className="w-44 h-35"
        src={require("./logo2.jpeg")} alt="logo" 
        /> */}
    
      <h1 className=' font-sans tracking-tight text-6xl px-4 py-2 text-red-600 font-bold'>MovieGPT</h1>
      {/* <img className='w-52' 
      // src="src/components/movieGptLogo.png"
      //src="C:/Users/Hp/Desktop/movielogo1.png"
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt = "logo"/>  */}
      {user && (<div className='w-20'>
        <img alt="usericon" src='https://images.ctfassets.net/4cd45et68cgf/1pFUjCo5EKjZp9SMoSIsmq/f66c53a4473233fa73f5820bc8a04d8a/NFLX_Profile_10Yrs.jpg?w=2000'></img>
        <button onClick={handleSignOut} className='font-bold text-white '>(Sign Out)</button>      
      </div>)}
    </div>
    
   
  )
}

export default Header

import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../utils/firebase";
import {updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMesssage, setErrorMessage] = useState(null);
    
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick=()=>{
        //validate form data
       
        const msg = checkValidData(email.current.value,password.current.value);
        setErrorMessage(msg);
        
        if(msg) return;

        //signin signup logic
        if(!isSignInForm)
        {   //sign up logic
            createUserWithEmailAndPassword(
                auth, 
                email.current.value, 
                password.current.value
            )
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value
                  }).then(() => {
                        // Profile updated!
                        const {uid,email,displayName} = auth.currentUser;
                        dispatch(
                            addUser({
                                uid:uid, 
                                email:email,
                                displayName:displayName
                            })
                        );
                        
                 }).catch((error) => {
                        // An error occurred
                        setErrorMessage(error.message);
                    });
                
                //console.log(user);
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+ errorMessage);
                // ..
            });

        }
        else{
            //signin logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode+"-"+ errorMessage)
             });

        }
     
    }
    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <div className="absolute">
            <img src={BG_URL}
      alt="background"></img> 
            </div>
            <div className=" fixed opacity-60 w-full h-full bg-black"></div>
            <Header/> 
            <form 
            onSubmit={(e)=>e.preventDefault()}
            className="w-1/3  absolute p-12 bg-black bg-opacity-70 my-24 mx-auto right-0 left-0 text-white ">
                <h1 className="font-bold text-3xl p-2 ">{isSignInForm? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input 
                ref = {name}
                type="text" 
                placeholder="Full Name" 
                className="p-4 my-2 w-full bg-neutral-700 rounded"
                />}
                
                <input 
                 ref={email}
                 type="text" 
                 placeholder="Email Address" 
                 className="p-4 my-2 w-full bg-neutral-700 rounded"
                />
                <input 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-2 w-full bg-neutral-700 rounded-lg"
                />
                <p className="text-red-500 font-bold text-lg py-2">
                    {errorMesssage}
                </p>
                <button className="p-4 my-6 bg-red-600 w-full rounded" onClick={handleButtonClick}>
                    {isSignInForm? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm? "New to Movie GPT? Sign Up Now" : "Already registered? Sign In Now"}</p>
            </form>
         
        </div>
    )
}
export default Login;
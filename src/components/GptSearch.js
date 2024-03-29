import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    <>
        <div className="fixed -z-10">
            <img className='h-screen w-screen object-cover' src={BG_URL}
                alt="background">
            </img> 
        </div> 
    <div className=''>
         {/* <div className=" absolute -z-10 opacity-50 w-full h-full bg-black"></div> */}
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
    </>
  )
}

export default GptSearch
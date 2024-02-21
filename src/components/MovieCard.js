import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = (posterPath) => {
  if(!posterPath.posterPath) return null;
  return (  
    <div className='w-40 px-1'>
        <img 
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath.posterPath}/>
    </div>
  )
}

export default MovieCard
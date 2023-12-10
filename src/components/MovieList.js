import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  if(movies==null) return;

  return (
    <div className='px-10'>
        <h1 className='px-1 py-2 text-white text-lg'>{title}</h1>
        <div className='flex overflow-x-scroll'>
            <div className='flex'>
              {movies?.map(movie=><MovieCard key={movie?.id} posterPath={movie?.poster_path}/>)}
                
            </div>
        </div>
    </div>
  )
}

export default MovieList
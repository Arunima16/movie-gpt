import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom';

const MovieList = ({title, movies}) => {
  if(movies==null) return null;

  return (
    <div className='px-10'>
        <h1 className='px-1 py-2 text-white text-lg'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>
            <div className='flex'>
              {movies?.map(movie=>
              
              (<Link to = {"/movieinfo/" + movie?.id}>

                <MovieCard key={movie?.id} posterPath={movie?.poster_path}/>
              </Link>))}
                
            </div>
        </div>
    </div>
  )
}

export default MovieList
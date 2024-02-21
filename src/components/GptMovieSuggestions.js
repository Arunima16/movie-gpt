import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector(store=> store.gpt);
  if(!movieNames) return null;

  return (
<div className='relative'>
  <div className='absolute inset-0 bg-black mx-10 my-5 opacity-80'></div>
  <div className='p-4 m-4 relative z-10'>
    {movieNames.map((movieName, index) => 
      <MovieList
        key={movieName}
        title={movieName}
        movies={movieResults[index]}
      />
    )}
  </div>
</div>



  )
}

export default GptMovieSuggestions
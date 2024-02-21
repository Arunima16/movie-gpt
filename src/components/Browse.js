import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainConatiner from './MainConatiner';
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store=> store.gpt.showGptSearch);
   useNowPlayingMovies();
   usePopularMovies();
   useTopRatedMovies();
   useUpcomingMovies();
  return (
    <div>
      {/* <div className=" absolute opacity-30 w-screen aspect-video bg-black"></div> */}
      <div className=" fixed opacity-30 w-full h-full bg-black"></div>
      <Header/>
      {
        showGptSearch?(<GptSearch/>):
        (
          <>
          <MainConatiner/>
          <SecondaryContainer/>
          </>
        )
      }
    </div>
  );
};

export default Browse;
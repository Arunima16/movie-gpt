import React from 'react'
import {useSelector} from "react-redux";
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainConatiner = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies)
    
    if(movies==null) return;
    
    const mainMovie = movies[0];
    
    const {original_title, overview} = mainMovie;
    return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground/>
    </div>
  )
}

export default MainConatiner;
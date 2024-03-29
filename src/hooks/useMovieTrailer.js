import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = () => {
    
  const dispatch = useDispatch();

  const trailerVideo = useSelector(store=> store.movies.trailerVideo)
  
  const movies = useSelector(store=> store.movies?.nowPlayingMovies);

  const mainMovie = movies[0];
  
  //fetch trailer video and updating store with trailer video data//901362
  const getMovieVideos= async() =>{
   //  console.log(movieId);
    const data = await fetch("https://api.themoviedb.org/3/movie/"+ mainMovie?.id +"/videos?language=en-US", API_OPTIONS);
    const json = await data.json();
    

    const filterData = json.results.filter(video=>video.type === "Trailer");
    const trailer = filterData.length? filterData[0] : json.results[0];
    
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(()=>{
    if(!trailerVideo)
    getMovieVideos();
  },[]);

};

export default useMovieTrailer;
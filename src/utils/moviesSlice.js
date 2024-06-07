import {createSlice} from "@reduxjs/toolkit"
const moviesSlice = createSlice({
    name: "movies",
    initialState:{
        nowPlayingMovies: null,
        popularMovies:null,
        topRatedMovies:null,
        upcomingMovies:null,
        trailerVideo:null,
        movieInfo:null,
        castInfo:null,
        castMovies:null,
        movieVideos:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state, action)=>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies:(state, action)=>{
            state.upcomingMovies = action.payload;
        },
         addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
         },
         addMovieInfo: (state, action) => {
            state.movieInfo = action.payload;
        },
        clearMovieInfo: (state, action) => {
            state.movieInfo = null;
        },
        addCastInfo: (state, action) => {
            state.castInfo = action.payload;
        },
        clearCastInfo: (state, action) => {
            state.castInfo = null;
        },
        addMovieVideos: (state, action) => {
            state.movieVideos = action.payload;
        },
        clearMovieVideos: (state, action) => {
            state.movieVideos = null;
        },
        addCastMovies: (state, action) => {
            state.castMovies = action.payload;
        },
        clearCastMovies: (state, action) => {
            state.castMovies = null;
        },
       
    },

});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpcomingMovies,addMovieInfo,clearMovieInfo,addCastInfo,clearCastInfo,addCastMovies,clearCastMovies,addMovieVideos,clearMovieVideos} = moviesSlice.actions;
export default moviesSlice.reducer;
//for urls

export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGEwMmRiOTg5MmZmNWU1ZDkwYmZkNTMzZTAzZGQ4NiIsInN1YiI6IjY1NzBjNmI1ODViMTA1MDEyYzFjMWM2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VuLWRHMgOqOvKm03J6JGlBZtRn7JryPTp8WN2wPHCWE', 
      //+ process.env.REACT_APP_TMDB_KEY,
    }
  };

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w200/";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/c906271d-7184-4eec-83c9-b6d4c1a068ec/728874a6-eeda-400a-9bcf-a935a1408a4f/IN-en-20231127-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const SUPPORTED_LANGUAGES = [
  {identifier:"en", name:"English"},
  {identifier:"hindi", name:"Hindi"},
  {identifier:"spanish", name:"Spanish"},
];

export const OPENAI_KEY = "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";
//export const OPENAI_KEY = ""+ process.env.REACT_APP_OPENAI_KEY;
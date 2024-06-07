import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MovieInfo from './MovieInfo'
import MoviesByActor from './MoviesByActor'

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
    },
    {
      path: "/browse",
      element:<Browse/>,
    },
    {
      path: "/movieinfo/:id",
      element:<MovieInfo/>,
    },
    {
      path: "/castmovie/:id",
      element:<MoviesByActor/>,
    },
  ]);
  
  return (
    <div>
        <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}
export default Body;
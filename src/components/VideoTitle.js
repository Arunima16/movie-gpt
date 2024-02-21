import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
  <div className='w-screen aspect-video py-24 md:pt-36 px-6 md:px-12 absolute text-white'>
        <h1 className='text-2xl md:text-6xl font-bold '>{title}</h1>
        <p className='hidden md:inline-block my-4 w-1/3'>{overview}</p>
        <div className='my-4'>
            <button className='bg-white text-black p-1 px-4 font-bold rounded hover:bg-opacity-80'>▶️ Play</button>
            <button className='hidden md:inline-block mx-2 bg-neutral-500 text-white p-1 px-4 rounded'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
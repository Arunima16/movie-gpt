import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
  <div className='w-screen aspect-video pt-36 px-12 absolute text-white'>
        <h1 className='text-6xl font-bold '>{title}</h1>
        <p className='my-4 w-1/3'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-1 px-4 font-bold rounded hover:bg-opacity-80'>▶️ Play</button>
            <button className='mx-2 bg-neutral-500 text-white p-1 px-4 rounded'>ℹ️ More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle
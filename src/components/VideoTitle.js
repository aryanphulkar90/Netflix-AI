import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[15%] px-12 w-full aspect-video absolute bg-gradient-to-r from from-black">
      <h1 className="text-lg md:text-6xl font-bold text-white">{title}</h1>
      <p className="hidden md:inline-block py-6 text-md w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black py-1 md:py-2 px-5 md:px-10 text-md mr-2 rounded-lg md:text-md hover:bg-opacity-50">
         Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white py-2 px-6 text-md rounded-lg text-md bg-opacity-50">
         More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
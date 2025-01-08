import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-[15%] px-12 w-full aspect-video absolute bg-gradient-to-r from from-black">
      <h1 className="text-6xl font-bold text-white">{title}</h1>
      <p className="py-6 text-md w-1/4 text-white">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-10 text-md mr-2 rounded-lg text-md hover:bg-opacity">
         Play
        </button>
        <button className="bg-gray-500 text-white py-2 px-6 text-md rounded-lg text-md bg-opacity-50">
         More Info
        </button>
      </div>
    </div>
  )
}

export default VideoTitle
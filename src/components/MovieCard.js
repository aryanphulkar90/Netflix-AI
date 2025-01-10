import React from 'react'
import { IMG_CDN } from "../utils/constants"

const MovieCard = ({posterPath, movieId}) => {
  if(!posterPath) return null
  return (
    <div className="w-32 md:w-40 pr-4 hover:scale-110 cursor-pointer">
        <img 
              src = {IMG_CDN + posterPath}
              alt = "Movie Poster not Available"
        />
    </div>
  )
}

export default MovieCard
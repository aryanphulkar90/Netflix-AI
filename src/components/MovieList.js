import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies}) => {
  return (
    <div className="px-6">
        <h6 className="text-lg md:text-xl py-2 text-white">{title}</h6>
        <div className="flex overflow-x-scroll no-scrollbar overflow-y-hidden">
            <div className = "flex">
                {
                    movies?.map((movie)=>(
                        <MovieCard key={movie.id} posterPath = {movie.poster_path} movieId={movie.id}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MovieList
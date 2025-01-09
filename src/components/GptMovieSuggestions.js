import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"

const GptMovieSuggestions = () => {
  const {movieNames, movieResults} = useSelector((store)=>store.gpt)
  return (
    <div className="bg-black text-white m-4 bg-opacity-70">
      {
        movieNames?.map((movieName, index) => {
          return (<MovieList
           key={movieName}
           title={movieName}
           movies={movieResults[index]}
          />)
        })
      }
    </div>
  )
}

export default GptMovieSuggestions
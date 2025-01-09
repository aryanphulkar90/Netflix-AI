import React, { useRef } from 'react'
import lang from '../utils/langConstants'
import { useDispatch, useSelector } from 'react-redux'
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, GEMINI_API_KEY } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const langKey = useSelector((store)=>store.config.lang)
  const searchText = useRef(null)
  const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
  
  const searchMovieTMDB = async(movie) =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+
      movie+
      "&language=en-US&page=1",
      API_OPTIONS
    )
    const json = await data.json()
    return json.results
  }

  const handleGptSearchClick = async() => {
      // Make an API call to GEMINI AI
      
      const searchQuery = "Act as a Movie Recommendationn System. Suggest five movies for the following query : " +
                        searchText.current.value +
                        " Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Hero, Race, Liger" 
      
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            
  //    const result = await model.generateContent(searchQuery);
      const result = "RRR, Race, Liger, Gadar, Sholay"
      
      const movies = result.split(",");
      
      const promiseArray = movies.map((movie)=>searchMovieTMDB(movie))

      const tmdbResults = await Promise.all(promiseArray)
      
      dispatch(addGptMovieResult({movieNames : movies, movieResults : tmdbResults}))
  }
  return (
    <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12"
              onSubmit={(e) => e.preventDefault()}>
            <input 
            ref={searchText}
            type="text" 
            className="p-4 m-4 col-span-9" 
            placeholder={lang[langKey].GptSearchPlaceholder}
            />
            <button className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
                    onClick={handleGptSearchClick}
            >
            {lang[langKey].search}</button>
        </form>
    </div>
  )
}

export default GptSearchBar
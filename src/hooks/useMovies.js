import { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcomingMovies } from '../utils/moviesSlice'

const useMovies = () =>{
  const dispatch = useDispatch()
  
  const movies  = useSelector((store)=>store)

  const getMovies = async() => {
    const dataNowPlaying = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS)
    const jsonNowPlaying = await dataNowPlaying.json()
    dispatch(addNowPlayingMovies(jsonNowPlaying.results))

    const dataPopularMovies = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS)
    const jsonPopularMovies  = await dataPopularMovies.json()
    dispatch(addPopularMovies(jsonPopularMovies.results))

    const dataUpcomingMovies = await fetch("https://api.themoviedb.org/3/movie/upcoming?page=1", API_OPTIONS)
    const jsonUpcomingMovies = await dataUpcomingMovies.json()
    dispatch(addUpcomingMovies(jsonUpcomingMovies.results))

    const dataTopRatedMovies = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1", API_OPTIONS)
    const jsonTopRatedMovies  = await dataTopRatedMovies.json()
    dispatch(addTopRatedMovies(jsonTopRatedMovies.results))
  }
  
  useEffect(()=>{
    (!movies.nowPlayingMovies || !movies.popularMovies || !movies.topRatedMovies || !movies.upcomingMovies) &&  getMovies()
  }, [])

}

export default useMovies
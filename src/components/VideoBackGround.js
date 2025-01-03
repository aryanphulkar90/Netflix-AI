import React from 'react'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackGround = ({movieId}) => {
  const trailerVideo = useSelector((store)=>store.movies.trailerVideo)
  useMovieTrailer(movieId)
  return (
    <div>
      <iframe 
              className="w-full aspect-video"
              src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?autoplay=1&mute=1&loop=1&color=white&controls=0&modestbranding=1&playsinline=1&rel=0&enablejsapi=1&playlist=" + trailerVideo?.key}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >
      </iframe>
      <div className="opacity:0 hidden"> 
        <div className="ytp-title-text">This is the video title</div> 
      </div> 
    </div>
  )
}

export default VideoBackGround
import React from 'react'
import Titles from "../Titles"
import {FaUserFriends} from 'react-icons/fa'
import Swiper, { Autoplay } from 'swiper'

const MovieCasts = () => {
  return (
    <div className='my-12' >
      <Titles title="Casts" Icon={FaUserFriends} />
      <div className='mt-10' >
        <Swiper autoplay={{
          delay: 1000,
          disableOnIneraction: false,
        }} loop={true} speed={1000} module={[Autoplay]} 
        breakpoints={{
          0:{
            slidesPerView:1,
            spaceBetween:10,
          },
          400:{
            slidesPerView:2,
          },
          768:{
            slidesPerView:3,
          },
          1024:{
            slidesPerView:4,
          },
          1280:{
            slidesPerView:5,
            spaceBetween:30,
          }
        }}
        >

        </Swiper>
      </div>
    </div>
  )
}

export default MovieCasts
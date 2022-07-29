import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux'
import "swiper/css";
import "swiper/css/pagination";
import "./ImageSilder.css";
import { Autoplay, Pagination, Navigation } from "swiper";

function ImageSilder() {
    const images = useSelector(state=>state.productReducer.imageUrl)
    const productFetch = useSelector(state=>state.productReducer.productFetch)
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            productFetch?(
                    images.map(elem=>{
                        return(
                        <SwiperSlide><img className="Images" src={elem}/></SwiperSlide>
                        )
                    })):<></>

        }
        {/* <SwiperSlide><img src=""/></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}

export default ImageSilder;
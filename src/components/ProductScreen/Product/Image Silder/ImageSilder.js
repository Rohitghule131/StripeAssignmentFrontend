import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSelector } from 'react-redux'
import "swiper/css";
import "swiper/css/pagination";
import "./ImageSilder.css";
import { Autoplay, Pagination } from "swiper";

// used Swiper Image Slider 
// its css

function ImageSilder() {
  // get images links from state and ProductFetch boolean state

  const images = useSelector(state => state.productReducer.imageUrl)
  const productFetch = useSelector(state => state.productReducer.productFetch)

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
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {
          // if Product detail is get from backend So productFetch is true else false
          // using map function created SwiperSlide with image element using image link

          productFetch ? (
            images.map(elem => {
              return (
                <SwiperSlide><img className="Images" src={elem} /></SwiperSlide>
              )
            })) : <>{/* When product isn't get fetch component isn't render */}</>

        }
      </Swiper>
    </>
  );
}

export default ImageSilder;
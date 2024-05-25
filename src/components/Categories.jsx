import Category from "./Category";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { Autoplay, FreeMode } from "swiper/modules";
export default function Categories() {
  return (
    <div className="max-w-6xl mx-auto px-3 pt-20">
      <div>
        <h1 className="text-2xl font-semibold text-center">
          SHOP BY CATEGORIES
        </h1>
      </div>
      <div className="mt-10">
        <Swiper
          speed={2500}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          slidesPerView={4}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Category />
          </SwiperSlide>
          <SwiperSlide>
            <Category />
          </SwiperSlide>
          <SwiperSlide>
            <Category />
          </SwiperSlide>
          <SwiperSlide>
            <Category />
          </SwiperSlide>
          <SwiperSlide>
            <Category />
          </SwiperSlide>
          <SwiperSlide>
            <Category />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

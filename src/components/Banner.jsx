import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
export default function Banner() {
  return (
    <>
      <Swiper
        speed={2500}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Autoplay, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full h-[550px] object-cover"
            src="https://images.pexels.com/photos/313779/pexels-photo-313779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[550px] object-cover"
            src="https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-[550px] object-cover"
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

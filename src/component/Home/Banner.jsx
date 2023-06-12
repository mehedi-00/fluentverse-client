// import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation } from "swiper";
import img2 from '../../assets/images/Banner/banner-2.jpg';
import img3 from '../../assets/images/Banner/banner-3.jpg';
import Container from "../share/Container";
import BannerDescription from "./BannerDescription";



const Banner = () => {
    return (
        <>
            <Container>
                <Swiper
                    pagination={{
                        type: "progressbar",
                    }}
                    loop={true}
                    speed={1000}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper h-[60vh] md:h-[80vh]"
                >
                    <SwiperSlide>
                        <div className="relative w-full h-full">
                            <img className="object-cover w-full h-full" src='https://i.ibb.co/cygDyQF/31086119.jpg' alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-70 z-10 w-full h-full text-white flex  justify-center items-center">
                                <BannerDescription />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="relative w-full h-full">
                            <img className="object-cover w-full h-full" src={img2} alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-30 z-10 w-full h-full text-white flex  justify-center items-center">
                                <BannerDescription />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="relative w-full h-full">
                            <img className="object-cover w-full h-full" src={img3} alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-30 z-10 w-full h-full text-white flex  justify-center items-center">
                                <BannerDescription />
                            </div>
                        </div>
                    </SwiperSlide>


                </Swiper>
            </Container>
        </>
    );
};

export default Banner;

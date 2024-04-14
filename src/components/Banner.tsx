import { useState, useEffect } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';


const Banner = () => {
    const DataSlider = [
        {
            img: "./images/banner/h4-slide.png",
            name: "iPhone",
            title: "6 Plus",
            subtitle: "Dual Sim",
        },
        {
            img: "../images/banner/h4-slide2.png",
            name: "by one, get one",
            title: "50%",
            subtitle: "school supplies && backpacks.* ",
        },
        {
            img: "../images/banner/h4-slide3.png",
            name: "Apple",
            title: "Store Ipod",
            subtitle: "Select Item",
        },
        {
            img: "../images/banner/h4-slide4.png",
            name: "Apple",
            title: "Store Ipod",
            subtitle: "&Phone",
        }
    ];

    return (
        <div className="text-[red]">
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
            <Banner />
            <section></section>
        </div >
    );
};

export default Banner; 
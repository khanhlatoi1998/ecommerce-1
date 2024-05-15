import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';



const Banner = () => {
    const dataBanner = [
        {
            img: "../images/banner/h4-slide.png",
            name: "iPhone",
            title: "6 Plus",
            subtitle: "Dual Sim",
        },
        {
            img: "../images/banner/h4-slide2.png",
            name: "by one, get one",
            title: "50%",
            subtitle: "school supplies && backpacks",
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
        <div className="container py-12">
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
                {
                    dataBanner.map((b: any, idx: any) => {
                        return (
                            <SwiperSlide key={idx}>
                                <div className="relative">
                                    <img src={b?.img} className="object-cover" alt="" />
                                    <div className="absolute top-20 left-[60%]">
                                        <p className="text-color-03">
                                            {b.name}
                                            <span className="text-color-02 font-medium"> {b.title} </span>
                                        </p>
                                        <p className="text-color-03">{b.subtitle}</p>
                                        <div className="relative w-[129px] py-2 pl-10 rounded-full border border-solid border-gray-2 mt-1">
                                            <NavLink className="text-color-02 underline" to="/shop">Shop now</NavLink>
                                            <span className="absolute top-[50%] left-1 transition translate-y-[-50%] bg-color-03 w-[27px] h-[27px] rounded-full flex items-center justify-center">
                                                <i className="fa-solid fa-angle-right text-white"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <section></section>
        </div >
    );
};

export default Banner;  
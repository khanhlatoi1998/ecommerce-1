import { NavLink } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const News = () => {
    const clickPrev = () => {
        const el: any = document.querySelectorAll('.news .swiper-button-prev')
        el[0].click();
    };
    const clickNext = () => {
        const el: any = document.querySelectorAll('.news .swiper-button-next')
        el[0].click();
    };

    const listNews = [
        {
            link: '11 JUNE, 2022',
            title: '',
            date: '',
            content: '',
            image: ''
        },
    ];

    return (
        <div>
            <div className="featuredcColection mt-12">
                <div className="flex items-center justify-between">
                    <p className="text-title-1 font-medium">Our Latest News</p>
                    <div className="flex items-center opacity-70">
                        <button className="px-2" onClick={() => clickPrev()}>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button className="px-2" onClick={() => clickNext()}>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>

                <Swiper
                    slidesPerView={4}
                    // centeredSlides={true}
                    spaceBetween={16}
                    // grabCursor={true}
                    pagination={{
                        // clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mt-8 news"
                >
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1].map((el: any, idx: any) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <NavLink to="/" className="block bg-white rounded-md shadow-shadow-1 overflow-hidden">
                                        <div className="w-full h-[180px]  overflow-hidden">
                                            <img src="../images/news/news1.jpg" className="w-full h-full object-cover transition hover:scale-[1.04]" alt="" />
                                        </div>
                                        <div className="p-4 flex flex-col gap-y-2">
                                            <p className="opacity-opacity-1">11 JUNE, 2022</p>
                                            <p className="text-title-2 font-medium line-clamp-1 capitalize">nderstand what youre saying it's very go</p>
                                            <p className="opacity-opacity-1 line-clamp-2">ddamn bro, thats a golden content. even tho sometimes i struggle to understand what youre saying it's very good to have you teaching us on yt, and you showed us that u care bout us when u said "its not about speed, so take ur time to learn it"</p>
                                            <div>
                                                <button className="p-4 py-2 mt-1 bg-color-09 text-white rounded-full hover:text-color-01">READ MORE</button>
                                            </div>
                                        </div>
                                    </NavLink>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default News;
import { NavLink } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const FeaturedColection = () => {
    const clickPrev = () => {
        const el: any = document.querySelectorAll('.featuredColection .swiper-button-prev')
        el[0].click();
    };
    const clickNext = () => {
        const el: any = document.querySelectorAll('.featuredColection .swiper-button-next')
        el[0].click();
    };

    return (
        <div className="featuredcColection mt-16">
            <div className="flex items-center justify-between">
                <p className="text-title-1 font-medium">Featured Colection</p>
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
                slidesPerView={5}
                // centeredSlides={true}
                spaceBetween={30}
                // grabCursor={true}
                pagination={{
                    // clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mt-8 featuredColection relative"
            >
                {
                    [1, 1, 1, 1, 1, 1, 1, 1].map((el: any, idx: any) => {
                        return (
                            <SwiperSlide key={idx}>
                                <NavLink to="" className="block shadow-shadow-1 rounded-md p-4 bg-white h-full group">
                                    <div className="flex items-center justify-between">
                                        <span className="px-2 py-1 bg-color-01 rounded-full">-33%</span>
                                        <i className="fa-regular fa-heart hover:text-color-03 cursor-pointer p-1"></i>
                                    </div>
                                    <figure className="py-4 flex items-center justify-center bg-white">
                                        <img className="max-w-[80%]" src="../images/products/iphone-15-pro-max_3.png" alt="" />
                                    </figure>
                                    <div className="flex flex-col gap-2">
                                        <p className="text-color-05">Samsung</p>
                                        <p className="font-medium h-[45px] group-hover:text-blue-500">OPPO Reno10 5G 128GB</p>
                                        <span className="flex-item-center">
                                            <i className="fa-solid fa-star text-yellow-300"></i>
                                            <i className="fa-solid fa-star text-yellow-300"></i>
                                            <i className="fa-solid fa-star text-yellow-300"></i>
                                            <i className="fa-solid fa-star text-yellow-300"></i>
                                            <i className="fa-solid fa-star text-yellow-300"></i>
                                        </span>
                                        <div>
                                            <span className="text-color-03">$500.000 </span>
                                            <span className="line-through opacity-60"> $100.000</span>
                                        </div>
                                    </div>
                                </NavLink>
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>

            <div className="grid grid-cols-4 mt-16 gap-4">
                <div className="bg-white shadow-shadow-1 rounded-md px-4 py-8 hover:bg-black cursor-pointer group">
                    <div className="flex flex-col gap-y-2 group-hover:text-white">
                        <p className="opacity-opacity-1">SMART PHONE</p>
                        <p className="text-title-1 font-medium">Smart Phone</p>
                        <p className="opacity-opacity-1">OPPO Reno10 5G 128GB</p>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <img src="../images/products/iphone-15-pro-max_3.png" className="max-w-[90%]" alt="" />
                    </div>
                </div>
                <div className="bg-white shadow-shadow-1 rounded-md px-4 py-8 hover:bg-black cursor-pointer group">
                    <div className="flex flex-col gap-y-2 group-hover:text-white">
                        <p className="opacity-opacity-1">SMART PHONE</p>
                        <p className="text-title-1 font-medium">Smart Phone</p>
                        <p className="opacity-opacity-1">OPPO Reno10 5G 128GB</p>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <img src="../images/products/iphone-15-pro-max_3.png" className="max-w-[90%]" alt="" />
                    </div>
                </div>
                <div className="bg-white shadow-shadow-1 rounded-md px-4 py-8 hover:bg-black cursor-pointer group">
                    <div className="flex flex-col gap-y-2 group-hover:text-white">
                        <p className="opacity-opacity-1">SMART PHONE</p>
                        <p className="text-title-1 font-medium">Smart Phone</p>
                        <p className="opacity-opacity-1">OPPO Reno10 5G 128GB</p>
                    </div>
                    <div className="flex items-center justify-center mt-8">
                        <img src="../images/products/iphone-15-pro-max_3.png" className="max-w-[90%]" alt="" />
                    </div>
                </div>
                <div className="bg-white shadow-shadow-1 rounded-md px-4 py-8 hover:bg-black cursor-pointer group">
                    <div className="flex flex-col gap-y-2 group-hover:text-white">
                        <p className="opacity-opacity-1">SMART PHONE</p>
                        <p className="text-title-1 font-medium">Smart Phone</p>
                        <p className="opacity-opacity-1">OPPO Reno10 5G 128GB</p>
                    </div>
                    <div className="flex items-center justify-center mt-8 object-cover bg-white">
                        <img src="../images/products/gia-treo-man-hinh-may-tinh-north-bayou-nb-f80.png" className="max-w-[90%]" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedColection;

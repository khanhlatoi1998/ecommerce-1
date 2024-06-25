import { NavLink } from "react-router-dom";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const PopularProducts = () => {
    const clickPrev = () => {
        const el: any = document.querySelectorAll('.popular .swiper-button-prev')
        el[0].click();
    };
    const clickNext = () => {
        const el: any = document.querySelectorAll('.popular .swiper-button-next')
        el[0].click();
    };

    return (
        <div className="featuredcColection mt-16">
            <div className="flex items-center justify-between">
                <p className="text-title-1 font-medium">Our Pupolar Products</p>
                <div className="flex items-center opacity-70">
                    <button className="px-2" onClick={() => clickPrev()}>
                        <i className="fa-solid fa-angle-left"></i>
                    </button>
                    <button className="px-2" onClick={() => clickNext()}>
                        <i className="fa-solid fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div className="flex gap-4 mt-8">
                <div className="w-[230px] bg-white rounded-md shadow-shadow-1 p-4 font-medium">
                    <div className="flex items-center gap-4 py-1">
                        <img src="../images/products/loa.png" className="w-[50px] h-[50px]" alt="" />
                        <p>Smart Watch</p>
                    </div>
                    <div className="flex items-center gap-4 py-1">
                        <img src="../images/products/phone64.png" className="w-[50px] h-[50px]" alt="" />
                        <p className="opacity-opacity-1">Smart Phone</p>
                    </div>
                    <div className="flex items-center gap-4 py-1">
                        <img src="../images/products/laptop-129.png" className="w-[50px] h-[50px]" alt="" />
                        <p className="opacity-opacity-1">Laptop</p>
                    </div>
                </div>
                <div className="flex-1 h-[400px] overflow-hidden">
                    <Swiper
                        slidesPerView={4}
                        centerInsufficientSlides={true}
                        spaceBetween={16}
                        // grabCursor={true}
                        pagination={{
                            // clickable: true,
                        }}
                        navigation={true}
                        modules={[Navigation]}
                        className="popular relative px-20"
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
                                            <figure className="my-4 relative pt-[80%] bg-white">
                                                <img className="max-w-[80%] h-full absolute top-[50%] left-[50%] object-fill translate-x-[-50%] translate-y-[-50%]" src="../images/products/iphone-15-pro-max_3.png" alt="" />
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
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;
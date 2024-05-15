import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { NavLink } from "react-router-dom";

const SpecialProducts = () => {
    const clickPrev = () => {
        const el: any = document.querySelectorAll('.specialProducts .swiper-button-prev')
        el[0].click();
    };

    const clickNext = () => {
        const el: any = document.querySelectorAll('.specialProducts .swiper-button-next')
        el[0].click();
    };

    const star = 2.5;
    const ratingStar = Array.from({ length: 5 }, (ele, idx) => {
        let number: number = idx + 0.5;
        return (
            <span key={idx}>
                {
                    star >= idx + 1
                        ? (
                            <i className="fa-solid fa-star"></i>
                        )
                        : star >= number
                            ? (
                                <i className="fa-solid fa-star-half-stroke"></i>
                            )
                            : (
                                <i className="fa-regular fa-star"></i>
                            )

                }
            </span>
        )
    })

    console.log(ratingStar)


    return (
        <div>
            <div className="featuredcColection mt-12">
                <div className="flex items-center justify-between">
                    <p className="text-title-1 font-medium">Special Products</p>
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
                    slidesPerView={3}
                    // centeredSlides={true}
                    spaceBetween={30}
                    // grabCursor={true}
                    pagination={{
                        // clickable: true,
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mt-8 specialProducts"
                >
                    {
                        [1, 1, 1, 1, 1, 1, 1, 1].map((el: any, idx: any) => {
                            return (
                                <SwiperSlide key={idx}>
                                    <div className="block shadow-shadow-1 rounded-md p-4 bg-white h-full group">
                                        <div className="flex items-center justify-between">
                                            <span className="px-2 py-1 bg-color-01 rounded-full">-33%</span>
                                            <i className="fa-regular fa-heart hover:text-color-03 cursor-pointer p-1"></i>
                                        </div>

                                        <div className="grid grid-cols-2 gap-8 mt-4">
                                            <NavLink to="/d">
                                                <div className="flex items-center justify-center">
                                                    <img src="../images/products/iphone-15-pro-max_3.png" className="max-w-[90%]" alt="" />
                                                </div>
                                                <div className="flex items-center justify-center mt-8">
                                                    <img src="../images/products/iphone-15-pro-max_3.png" className="w-[90px] p-3 border border-solid border-gray-2" alt="" />
                                                </div>
                                            </NavLink>
                                            <div className="flex flex-col gap-2">
                                                <p className="text-color-05">Samsung</p>
                                                <p className="font-medium h-[45px] group-hover:text-blue-500">OPPO Reno10 5G 128GB</p>
                                                <div className="flex-item-center flex gap-[1px] text-yellow-300">
                                                    {
                                                        ratingStar
                                                    }
                                                </div>
                                                <div>
                                                    <span className="text-color-03">$500.000 </span>
                                                    <span className="line-through opacity-60"> $100.000</span>
                                                </div>
                                                <div>
                                                    <p className="opacity-opacity-1">Sold: 100</p>
                                                    <input type="range" className="sold pointer-events-" max="100" min="0" defaultValue={20} />
                                                </div>
                                                <div className="mt-2">
                                                    <button className="px-6 py-2 rounded-full bg-color-09 text-white">OPTION</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default SpecialProducts;
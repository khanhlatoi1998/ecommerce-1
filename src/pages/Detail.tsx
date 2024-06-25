import { Helmet } from "react-helmet-async";
import BreadCrumb from "../components/BreadCrumb";
import RatingStar from "../components/Rating";
import { Swiper, SwiperSlide } from "swiper/react";
import ItemProduct from "../components/ItemProduct";
import { Navigation } from "swiper/modules";

const Detail = () => {
    const imageZoomEl = document.getElementsByClassName('imageZoom');
    const clickPrev = () => {
        const el: any = document.querySelectorAll('.youMayAldoLike .swiper-button-prev')
        el[0].click();
    };
    const clickNext = () => {
        const el: any = document.querySelectorAll('.youMayAldoLike .swiper-button-next')
        el[0].click();
    };

    const handleZoomMousemove = (event: any) => {
        const valueScale = 1.5;
        let containerEl;
        let imageZoomEl: any;

        // evenet will handler to element direct of mouse  
        if (event.target.classList.contains("zoom-block")) {
            containerEl = event.target;
            imageZoomEl = containerEl.childNodes[1];
        } else {
            containerEl = event.target.parentNode;
            imageZoomEl = containerEl.childNodes[1];
        };

        imageZoomEl.style.display = 'block';
        const positonPx = event.clientX - containerEl.getBoundingClientRect().left; // get position mouse in element 
        const positonX = (positonPx / containerEl.offsetWidth); // convert value position mouse in element to %
        const positonPy = event.clientY - containerEl.getBoundingClientRect().top;
        const positonY = (positonPy / containerEl.offsetHeight);
        const getDeviationWidth = ((imageZoomEl.offsetWidth * valueScale) - imageZoomEl.offsetWidth) / valueScale / 2; // get space image when scale whith container 
        const getDeviationHeight = ((imageZoomEl.offsetHeight * valueScale) - imageZoomEl.offsetHeight) / valueScale / 2;
        const translateX = (- ((positonX * getDeviationWidth) * 2)) + getDeviationWidth; // transform position of imageZoom 
        const translateY = (- ((positonY * getDeviationHeight) * 2)) + getDeviationHeight;

        imageZoomEl.style.transform = `scale(${valueScale}) translateX(${translateX}px) translateY(${translateY}px)`;
        // create 1 container 1 image main 1 image zoom
        // confirm deviation between  image main and image zoom 
        // transform image zoom fit position mouse and image main
    };

    const handleZoomMouseout = (event: any) => {
        Array.from(imageZoomEl).forEach((el: any, idx: any) => {
            el.style.display = 'none';
        });
    };

    return (
        <div className="bg-color-04">
            <Helmet>
                <title>Descr</title>
            </Helmet>
            <BreadCrumb title="Dess" />
            <div className="container py-12">
                <div className="p-6 rounded-md shadow-shadow-1 bg-white grid grid-cols-2 gap-4">
                    <div>
                        <div
                            onMouseMove={(e) => handleZoomMousemove(e)}
                            onMouseOut={(e) => handleZoomMouseout(e)}
                            className="relative zoom-block overflow-hidden border border-solid border-gray-2 px-4 pt-[80%] rounded-sm flex items-center justify-center cursor-zoom-in"
                        >
                            <img className="mx-auto w-[80%] h-[80%] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] object-fill" src="../images/products/man-hinh-msi-pro-mp223-22-inch.png" alt="" />
                            <img
                                className={`imageZoom w-full h-full bg-no-repeat bg-cover`}
                                src="../images/products/man-hinh-msi-pro-mp223-22-inch.png" alt=""
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div
                                onMouseMove={(e) => handleZoomMousemove(e)}
                                onMouseOut={(e) => handleZoomMouseout(e)}
                                className="relative zoom-block overflow-hidden pt-[60%] border border-solid border-gray-2 px-4 py-8 rounded-sm flex items-center justify-center cursor-zoom-in"
                            >
                                <img className="mx-auto object-fill absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[92%] h-[92%]" src="../images/products/man-hinh-msi-pro-mp223-22-inch.png" alt="" />
                                <img
                                    className={`imageZoom w-full h-full bg-no-repeat bg-cover`}
                                    src="../images/products/man-hinh-msi-pro-mp223-22-inch.png" alt=""
                                />
                            </div>
                            <div
                                onMouseMove={(e) => handleZoomMousemove(e)}
                                onMouseOut={(e) => handleZoomMouseout(e)}
                                className="relative zoom-block overflow-hidden  pt-[60%] border border-solid border-gray-2 px-4 py-8 rounded-sm flex items-center justify-center cursor-zoom-in"
                            >
                                <img className="mx-auto object-fill absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[92%] h-[92%]" src="../images/products/man-hinh-msi-pro-mp223-22-inch.png" alt="" />
                                <img
                                    className={`imageZoom w-full h-full bg-no-repeat bg-cover`}
                                    src="../images/products/man-hinh-msi-pro-mp223-22-inch.png" alt=""
                                />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-title-2 font-bold">When something seems too good to be true</p>
                        <div className="mt-2 py-2 border-y border-solid border-gray-2 flex flex-col gap-2">
                            <div className="font-medium">
                                <span className="text-color-03">$100.00 </span>
                                <span className="line-through opacity-60">$500.00</span>
                            </div>
                            <div className="flex gap-1 ">
                                <div className="text-color-01">
                                    {RatingStar(4)}
                                </div>
                                <span className="opacity-opacity-1 cursor-pointer">(2 review)</span>
                            </div>
                            <p className="opacity-opacity-1 cursor-pointer">Wite a review</p>
                            <div className="flex items-center opacity-opacity-1">
                                <i className="fa-regular fa-heart mr-1 text-[18px]"></i>
                                <span>Add to wishlist</span>
                            </div>
                        </div>
                        <div className="mt-4 flex  flex-col gap-3">
                            <p className="font-bold">Type: <span className="font-normal">Headeset</span></p>
                            <p className="font-bold">Brand: <span className="font-normal">Iphone</span></p>
                            <p className="font-bold">Categories: <span className="font-normal">airpod, headphone</span></p>
                            <p className="font-bold">Tag: <span className="font-normal">ariport, speaker, headphone</span></p>
                            <p className="font-bold">SKU: <span className="font-normal">SKU124</span></p>
                            <div>
                                <p className="font-bold">Color</p>
                                <div className="flex gap-3 mt-2 items-center">
                                    <span className="w-[32px] h-[32px] bg-[red] cursor-pointer"></span>
                                    <span className="w-[40px] h-[40px] bg-yellow-200 cursor-pointer"></span>
                                </div>
                            </div>
                            <div className="flex  items-center gap-8">
                                <p className="font-bold">Quanlity</p>
                                <input type="number" className="border border-solid border-gray-2 max-w-[55px] p-2 text-center" defaultValue={1} />
                                <div>
                                    <button className="w-[140px] py-2 rounded-full bg-color-09 text-white">ADD TO CART</button>
                                    <button className="w-[140px] py-2 rounded-full bg-color-01 ml-2">BUY IT NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-opacity-1 mt-4">
                            <i className="fa-solid fa-share-nodes mr-1"></i>
                            Share
                        </div>
                        <div className="bg-color-04 px-8 py-6 mt-8">
                            <p className="text-center font-bold">Payment methods</p>
                            <div className="mt-4 flex items-center justify-center gap-2">
                                <img className="bg-white rounded-md w-[50px] h-[28px] object-cover" src="../images/visa.png" alt="" />
                                <img className="bg-white rounded-md w-[50px] h-[28px] object-cover" src="../images/vietcombank.png" alt="" />
                                <img className="bg-white rounded-md w-[50px] h-[28px] object-fill" src="../images/Paypal.png" alt="" />
                                <img className="bg-white rounded-md w-[50px] h-[28px] object-fill" src="../images/Paypal.png" alt="" />
                                <img className="bg-white rounded-md w-[50px] h-[28px] object-cover" src="../images/visa.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12">
                    <p className="font-bold text-title-1">Description</p>
                    <div className="p-8 rounded-md shadow-shadow-1 mt-4 bg-white text-justify">
                        When something seems too good to be true, it probably isn’t true at all. The story of Karl Rabeder, who was once a millionaire, is one of those stories. He had a nice house and fancy cars, and he stayed in expensive, five-star hotels. But one day, he decided to give it all up. Well, at least that’s what he claimed to do.

                        According to Karl, he was on a luxurious vacation with his wife in Hawaii when he was suddenly overcome with a feeling of emptiness. He decided right then and there that he was going to give away all of his money and material possessions to charity. He wanted to live a simple life in a wooden hut in the mountains.

                        “My idea is to have nothing left. Absolutely nothing,” he said.

                        People all over lauded him for his selflessness. He became well-known and started to coach others, steering them towards less superficial lives. And yet, something seemed fishy. For example, instead of giving his house away, he raffled it off. He sold tickets for 99 euros and ended up collecting two million euros from selling the tickets, even though his house was only worth 500,000. Some thought this was an ingenious way to make money for charity, but others were skeptical.
                    </div>
                </div>
                <div>
                    <p className="mt-12 font-bold text-title-1">Review</p>
                    <div className="mt-4 rounded-md shadow-shadow-1 px-6 pb-8 bg-white">
                        <div className="py-6">
                            <div className="flex-item-center flex gap-[1px] text-yellow-300">
                                {
                                    RatingStar(4)
                                }
                            </div>
                            <p className="font-medium mt-2">Good</p>
                            <p className="font-medium">Comeent</p>
                            <div className="mt-4 opacity-opacity-1">
                                <span>11 Jun 2024,</span>
                                <span className="ml-2">Name</span>
                            </div>
                        </div>
                        <div className="border-t border-solid border-gray-2 py-6">
                            <div className="flex-item-center flex gap-[1px] text-yellow-300">
                                {
                                    RatingStar(4)
                                }
                            </div>
                            <p className="font-medium mt-2">Good</p>
                            <p className="font-medium">Comeent</p>
                            <div className="mt-4 opacity-opacity-1">
                                <span>11 Jun 2024,</span>
                                <span className="ml-2">Name</span>
                            </div>
                        </div>
                        <div>
                            <p className="">Write a review</p>
                            <textarea className="mt-4 bg-color-04 w-full min-h-[100px] rounded-md p-6" placeholder="Comment..." name="" id=""></textarea>
                            <button className="ml-auto mr-0 py-2 px-6 bg-color-09 rounded-full text-white mt-2">Post</button>
                        </div>
                    </div>
                    <div>
                        <div className="youMayAldoLike mt-16">
                            <div className="flex items-center justify-between">
                                <p className="text-title-1 font-medium">You May Aldo Like</p>
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
                                                <ItemProduct />
                                            </SwiperSlide>

                                        )
                                    })
                                }
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detail;
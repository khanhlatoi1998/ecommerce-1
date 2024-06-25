import { Helmet } from "react-helmet-async";
import BreadCrumb from "../components/BreadCrumb";

const WishList = () => {
    return (
        <div>
            <Helmet>
                <title>WishList</title>
            </Helmet>
            <BreadCrumb title="Wishlist" />
            <div className="bg-color-04">
                <div className="container flex gap-2">
                    <div className="mt-8 pb-20 flex items-center gap-2">
                        <div className="max-w-[250px]">
                            <div className="bg-white rounded-sm">
                                <span className="flex justify-end">
                                    <i className="fa-solid fa-xmark mr-4 mt-2 cursor-pointer opacity-60"></i>
                                </span>
                                <div className="relative pt-[80%] mt-4 pb-4">
                                    <img className="absolute top-[50%] left-[50%] w-[60%] h-[85%] object-fill translate-x-[-50%] translate-y-[-50%]" src="../images/products/apple_lte_2__1.png" alt="" />
                                </div>
                            </div>
                            <p className="line-clamp-2 mt-2 font-bold min-h-[45px]">OPPO Reno10 5G 128GB OPPO Reno10 5G 128GB OPPO Reno10 5G 128GB OPPO Reno10 5G 128GB</p>
                            <div className="font-medium">
                                <span className="text-color-03">$500.00</span>
                                <span className="line-through opacity-60 ml-2">$700.00</span>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="bg-white">
                                <span className="flex justify-end">
                                    <i className="fa-solid fa-xmark mr-4 mt-2 cursor-pointer opacity-60"></i>
                                </span>
                                <div className="relative pt-[80%] mt-4 pb-4">
                                    <img className="absolute top-[50%] left-[50%] w-[60%] h-[85%] object-fill translate-x-[-50%] translate-y-[-50%]" src="../images/products/apple-airpods-pro-2-usb-c_1_.png" alt="" />
                                </div>
                            </div>
                            <p className="line-clamp-2 mt-2 font-bold min-h-[45px]">OPPO Reno10 5G 128GB OPPO Reno10 5G 128GB OPPO Reno10 5G 128GB OPPO Reno10 5G 128GB</p>
                            <div className="font-medium">
                                <span className="text-color-03">$500.00</span>
                                <span className="line-through opacity-60 ml-2">$700.00</span>
                            </div>
                        </div>
                        <div className="max-w-[250px]">
                            <div className="bg-white">
                                <span className="flex justify-end">
                                    <i className="fa-solid fa-xmark mr-4 mt-2 cursor-pointer opacity-60"></i>
                                </span>
                                <div className="relative pt-[80%] mt-4 pb-4">
                                    <img className="absolute top-[50%] left-[50%] w-[60%] h-[85%] object-fill translate-x-[-50%] translate-y-[-50%]" src="../images/products/man-hinh-msi-pro-mp223-22-inch.png" alt="" />
                                </div>
                            </div>
                            <p className="line-clamp-2 mt-2 font-bold min-h-[45px]">OPPO Reno10 5G 128GB OPPO Reno10 5G 128GB OPPO Reno10 5G 128GB OPPO Reno10 5G 128GB</p>
                            <div className="font-medium">
                                <span className="text-color-03">$500.00</span>
                                <span className="line-through opacity-60 ml-2">$700.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WishList;
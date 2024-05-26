import { NavLink } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import InfoProducts from "../components/InfoProduct";
import ItemProduct from "../components/ItemProduct";
import ReactPaginate from "react-paginate";
import { useState } from "react";


const OurStore = () => {
    const [selectedPage, setSelectedPage] = useState<number>(0);
    const showItems = 4;
    const pageCount = Math.ceil(50 / showItems);


    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setSelectedPage(selected * showItems);
    };

    return (
        <div>
            <BreadCrumb title="our store" />

            <div className="bg-color-04 p-4">
                <div className="container">
                    <div className="flex gap-4">
                        <div className="w-[300px]">
                            <div className="flex flex-col gap-4">
                                <div className="bg-white shadow-shadow-1 rounded-md p-4">
                                    <p className="text-title-2 font-medium">Shop By Categories </p>
                                    <div className="flex flex-col gap-3 mt-6 opacity-opacity-1 ">
                                        <NavLink className="hover:text-color-01" to="/">Home</NavLink>
                                        <NavLink className="hover:text-color-01" to="/our-store">Our Store</NavLink>
                                        <NavLink className="hover:text-color-01" to="/blogs">Blgos</NavLink>
                                        <NavLink className="hover:text-color-01" to="/contact">Contact</NavLink>
                                    </div>
                                </div>
                                <div className="bg-white shadow-shadow-1 rounded-md p-4">
                                    <p className="text-title-2 font-medium">Popular</p>
                                    <div className="flex gap-6 mt-4 py-2">
                                        <div>
                                            <img className="max-w-[70px]" src="../images/products/air_m2.png" alt="" />
                                        </div>
                                        <InfoProducts name="OPPO Reno10 5G 128GB kids  bulk 10 16gb" price={50} sale={10} rating={2.6} />
                                    </div>
                                    <div className="flex gap-6 mt-2 py-2 border-t border-gray-2 border-solid">
                                        <div>
                                            <img className="max-w-[70px]" src="../images/products/air_m2.png" alt="" />
                                        </div>
                                        <InfoProducts name="OPPO Reno10 5G 128GB kids  bulk 10 16gb" price={20} sale={10} rating={4} />
                                    </div>
                                </div>
                                <div className="bg-white shadow-shadow-1 rounded-md p-4">
                                    <p className="text-title-2 font-medium">Best Selling</p>
                                    <div className="flex gap-6 mt-4 py-2">
                                        <div>
                                            <img className="max-w-[70px]" src="../images/products/air_m2.png" alt="" />
                                        </div>
                                        <InfoProducts name="OPPO Reno10 5G 128GB kids  bulk 10 16gb" price={50} sale={10} rating={2.6} />
                                    </div>
                                    <div className="flex gap-6 mt-2 py-2 border-t border-gray-2 border-solid">
                                        <div>
                                            <img className="max-w-[70px]" src="../images/products/air_m2.png" alt="" />
                                        </div>
                                        <InfoProducts name="OPPO Reno10 5G 128GB kids  bulk 10 16gb" price={20} sale={10} rating={4} />
                                    </div>
                                </div>
                                <div className="bg-white shadow-shadow-1 rounded-md p-4">
                                    <p className="text-title-2 font-medium">Top Rating</p>
                                    <div className="flex gap-6 mt-4 py-2">
                                        <div>
                                            <img className="max-w-[70px]" src="../images/products/air_m2.png" alt="" />
                                        </div>
                                        <InfoProducts name="OPPO Reno10 5G 128GB kids  bulk 10 16gb" price={50} sale={10} rating={2.6} />
                                    </div>
                                    <div className="flex gap-6 mt-2 py-2 border-t border-gray-2 border-solid">
                                        <div>
                                            <img className="max-w-[70px]" src="../images/products/air_m2.png" alt="" />
                                        </div>
                                        <InfoProducts name="OPPO Reno10 5G 128GB kids  bulk 10 16gb" price={20} sale={10} rating={4} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <div className="bg-white shadow-shadow-1  rounded-md flex items-center justify-between gap-4 p-2 px-4">
                                <div className="flex items-center gap-4">
                                    <p className="font-medium">Sort By:</p>
                                    <select className="text-color-12 p-2 cursor-pointer bg-color-13 min-w-[150px] rounded-md" name="" id="">
                                        <option value="">Best selling</option>
                                        <option value="">Best price</option>
                                        <option value="">Best color</option>
                                    </select>
                                    <select className="text-color-12 p-2 cursor-pointer bg-color-13 min-w-[150px] rounded-md" name="" id="">
                                        <option value="">Range</option>
                                        <option value="">Best price</option>
                                        <option value="">Best color</option>
                                    </select>
                                    <select className="text-color-12 p-2 cursor-pointer bg-color-13 min-w-[150px] rounded-md" name="" id="">
                                        <option value="">Brands </option>
                                        <option value="">Best price</option>
                                        <option value="">Best color</option>
                                    </select>
                                </div>
                                <p className="opacity-opacity-1">20 products</p>
                            </div>

                            <div className="grid grid-cols-4 gap-4 mt-4">
                                {
                                    Array.from({ length: 10 }).map((el: any, idx: any) => {
                                        return (
                                            <ItemProduct key={idx} />
                                        )
                                    })
                                }
                            </div>
                            <div className="rounded-md p-2 shadow-shadow-1 bg-white mt-4">
                                <ReactPaginate
                                    breakLabel="..."
                                    nextLabel=">"
                                    previousLabel="<"
                                    className="flex lg:justify-center justify-end gap-2 mx-auto text-sm"
                                    pageLinkClassName="rounded-full w-[35px] h-[35px] block flex items-center justify-center"
                                    activeLinkClassName="bg-black text-white rounded-full w-[35px] h-[35px] block flex items-center justify-center"
                                    previousLinkClassName="rounded-full w-[35px] h-[35px] block flex items-center justify-center"
                                    nextLinkClassName="rounded-full w-[35px] h-[35px] block flex items-center justify-center"
                                    breakClassName="flex items-center"
                                    pageRangeDisplayed={3}
                                    marginPagesDisplayed={2}
                                    pageCount={pageCount}
                                    onPageChange={handlePageClick}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurStore;
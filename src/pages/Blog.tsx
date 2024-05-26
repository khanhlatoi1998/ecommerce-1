import ReactPaginate from "react-paginate";
import BlogCart from "../components/BlogCart";
import BreadCrumb from "../components/BreadCrumb";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Blog = () => {
    const [selectedPage, setSelectedPage] = useState<number>(0);
    const showItems = 4;
    const pageCount = Math.ceil(10 / showItems);


    const handlePageClick = (data: any) => {
        const selected = data.selected;
        setSelectedPage(selected * showItems);
    };
    return (
        <div>
            <BreadCrumb title="Blogs" />
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
                            </div>
                        </div>
                        <div className="flex-1 overflow-hidden">
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                {
                                    Array.from({ length: 4 }).map((el: any, idx: any) => {
                                        return (
                                            <BlogCart key={idx} title="nderstand what youre saying it's very go" time="11 12 2024" desc={"ddamn bro, thats a golden content. even tho sometimes i struggle to understand what youre saying it's very good to have you teaching us on yt, and you showed us that u care bout us when u said its not about speed, so take ur time to learn it"} />
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

export default Blog;
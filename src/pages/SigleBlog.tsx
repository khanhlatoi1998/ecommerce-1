import { Helmet } from "react-helmet-async";
import BreadCrumb from "../components/BreadCrumb";
import { NavLink } from "react-router-dom";
import { CheckLogin } from "../contain/CheckLogin";

const SigleBlog = () => {
    return (
        <div>
            <Helmet>
                <title>SingleBLog</title>
            </Helmet>
            <BreadCrumb title="Blog" />
            <div className="bg-color-04">
                <div className="container pt-8 pb-20">
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
                        <div className="flex-1">
                            <p className="text-title-1 font-medium">The Millionaire Mirage: All That Glitters Is Not Gold</p>
                            <div className="mt-4 flex items-center justify-center">
                                <img src="../images/news/news1.jpg" className="" alt="" />
                            </div>
                            <p className="mt-4 text-justify">
                                When something seems too good to be true, it probably isn’t true at all. The story of Karl Rabeder, who was once a millionaire, is one of those stories. He had a nice house and fancy cars, and he stayed in expensive, five-star hotels. But one day, he decided to give it all up. Well, at least that’s what he claimed to do.

                                According to Karl, he was on a luxurious vacation with his wife in Hawaii when he was suddenly overcome with a feeling of emptiness. He decided right then and there that he was going to give away all of his money and material possessions to charity. He wanted to live a simple life in a wooden hut in the mountains.

                                “My idea is to have nothing left. Absolutely nothing,” he said.

                                People all over lauded him for his selflessness. He became well-known and started to coach others, steering them towards less superficial lives. And yet, something seemed fishy. For example, instead of giving his house away, he raffled it off. He sold tickets for 99 euros and ended up collecting two million euros from selling the tickets, even though his house was only worth 500,000. Some thought this was an ingenious way to make money for charity, but others were skeptical.
                            </p>
                            <div className="mt-4 opacity-80">
                                11 Jun, 2024
                                <span className="ml-4">Name </span>
                            </div>
                            <div className="flex items-center justify-between mt-4 py-4 border-y border-solid border-gray-2">
                                <NavLink to="/blogs" className="opacity-opacity-1 font-medium">
                                    <i className="fa-solid fa-arrow-left-long mr-2"></i>
                                    Black
                                </NavLink>
                                <div className="flex items-center gap-4 cursor-default">
                                    <i className="fa-brands fa-square-instagram"></i>
                                    <i className="fa-brands fa-facebook"></i>
                                    <i className="fa-brands fa-telegram"></i>
                                </div>
                            </div>
                            <div className="mt-4 bg-white rounded-md shadow-shadow-1 p-4">
                                <p className="font-medium">Leave A Comment</p>
                                <textarea className="w-full min-h-[100px] mt-4 rounded-md bg-color-04 p-2" placeholder="Comment..." name="" id=""></textarea>
                                <button onClick={CheckLogin} className="text-white py-1 px-4 rounded-full bg-color-09 mt-2">Post</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SigleBlog;
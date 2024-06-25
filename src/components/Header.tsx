import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [openMenuCategories, setOpenMenuCategories] = useState<boolean>(false);



    return (
        <header className="text-white">
            <div className="bg-[#101920] py-2 border-b border-solid border-border-gray-1">
                <div className="container">
                    <div className="flex items-start justify-between flex-wrap gap-x-10">
                        <p>Free shipping Over $100 & Free Returns</p>
                        <div className="flex items-start gap-x-4 flex-wrap">
                            <div>Hotline: 02813453493 - 0282312413 </div>
                            <div className="flex items-center gap-x-4">
                                <div>
                                    English
                                    <i className="fa-solid fa-chevron-down ml-1"></i>
                                </div>
                                <div>
                                    USD $
                                    <i className="fa-solid fa-chevron-down ml-1"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>

            <div className="bg-[#101920] py-4">
                <div className="container grid md:grid-cols-12 grid-cols-1 flex-wrap">
                    <div className="col-span-2 font-medium text-title-1 flex items-center">Digitic.</div>
                    <div className="col-span-5 flex items-center">
                        <div className="h-[36px] w-[85%] relative rounded-md flex items-center overflow-hidden">
                            <input type="text" className="w-full h-full pl-4 pr-16 text-black" placeholder="Search product here..." />
                            <span className="absolute top-0 right-0 w-[40px] h-full bg-color-01 flex items-center justify-center">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 col-span-5">
                        <div className="flex items-center gap-3">
                            <i className="fa-solid fa-repeat text-[27px]"></i>
                            Compare Products
                        </div>
                        <NavLink to="wishlist" className="flex items-center gap-3">
                            <i className="fa-regular fa-heart text-[27px]"></i>
                            Favourite Wishlist
                        </NavLink>
                        <NavLink to="login" className="flex items-center gap-3">
                            <i className="fa-regular fa-user text-[27px]"></i>
                            Log In My Account
                        </NavLink>
                        <NavLink to="cart" className="flex items-center gap-3">
                            <span>
                                <i className="fa-solid fa-cart-plus text-color-01 text-[27px]"></i>
                            </span>
                            <div className="text-center">
                                <span className="rounded-lg px-2 bg-[white] text-color-01 mb-1 text-center text-[13px]">10</span>
                                <div>$0.00</div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>

            <nav className="bg-color-09">
                <div className="container flex items-center">
                    <div onMouseMove={() => setOpenMenuCategories(true)} onMouseLeave={() => setOpenMenuCategories(false)} className="relative flex gap-4 z-[10]">
                        <button>
                            <i className="fa-solid fa-bars-staggered"></i>
                        </button>
                        <div className=" cursor-pointer py-2">
                            <div className="flex items-center justify-between w-[300px] border-border-gray-1 border-r border-solid px-4">
                                <div className="">
                                    <p>SHOP CATEGORIES</p>
                                    <ul className={`${openMenuCategories ? 'flex' : 'hidden'} absolute top-[100%] left-0 bg-white text-black w-full rounded shadow-lg  flex-col border border-solid border-[#00000024]`}>
                                        <li className="hover:text-color-01 px-4 py-2">
                                            <NavLink to="/">
                                                Action
                                            </NavLink>
                                        </li>
                                        <li className="hover:text-color-01 px-4 py-2 border-t border-solid border-[#00000024]">
                                            <NavLink to="/">
                                                Another action
                                            </NavLink>
                                        </li>
                                        <li className="hover:text-color-01 px-4  py-2 border-t border-solid border-[#00000024]">
                                            <NavLink to="/">
                                                Something else here
                                            </NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <span>
                                    <i className="fa-solid fa-angle-down"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <ul className=" flex items-center gap-8 ml-8">
                        <li>
                            <NavLink to="/" className="hover:text-color-01">
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/our-store" className="hover:text-color-01">
                                OUR STORE
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/blogs" className="hover:text-color-01">
                                BGLOS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className="hover:text-color-01">
                                CONTACT
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;
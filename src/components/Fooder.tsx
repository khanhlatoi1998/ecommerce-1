import { NavLink } from "react-router-dom";

const Fooder = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };


    return (
        <footer className="bg-color-09 text-white">
            <div className="container py-12">
                <div className="lg:max-w-[80%] max-w-[95%] flex items-center justify-between flex-wrap gap-4">
                    <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-paper-plane text-3xl"></i>
                        <p className="text-title-1">Sign Up For Newsletter</p>
                    </div>
                    <div>
                        <input type="text" className="w-[300px] lg:w-[400px] h-[40px] rounded-md px-4 py-2 text-black" placeholder="your email..." />
                        <button className="rounded-md px-4 py-2 bg-color-09">SUBSRIBE</button>
                    </div>
                </div>
            </div>

            <div className="border-y border-solid border-border-gray-1 py-12">
                <div className="container">
                    <div className="grid grid-cols-2 md:grid-cols-12 gap-4 flex-wrap">
                        <div className="col-span-3 pr-4">
                            <p className="font-bold text-2xl">Contact Us</p>
                            <div className="mt-6 flex flex-col gap-4 opacity-80">
                                <p>
                                    Demo Store
                                    <br />
                                    No. 1259 Freedom. New York. 1111111 United States
                                </p>
                                <p>+02823456245</p>
                                <p>khanh@gmail.com</p>
                            </div>
                            <ul className="mt-5 flex items-center gap-1 flex-wrap">
                                <li className="w-[38px] h-[38px] rounded-full bg-color-10 flex items-center justify-center">
                                    <NavLink to="" >
                                        <i className="fa-brands fa-twitter"></i>
                                    </NavLink>
                                </li>
                                <li className="w-[38px] h-[38px] rounded-full bg-color-10 flex items-center justify-center">
                                    <NavLink to="" >
                                        <i className="fa-brands fa-facebook"></i>
                                    </NavLink>
                                </li>
                                <li className="w-[38px] h-[38px] rounded-full bg-color-10 flex items-center justify-center">
                                    <NavLink to="" >
                                        <i className="fa-brands fa-youtube"></i>
                                    </NavLink>
                                </li>
                                <li className="w-[38px] h-[38px] rounded-full bg-color-10 flex items-center justify-center">
                                    <NavLink to="" >
                                        <i className="fa-brands fa-instagram"></i>
                                    </NavLink>
                                </li>
                                <li className="w-[38px] h-[38px] rounded-full bg-color-10 flex items-center justify-center">
                                    <NavLink to="" >
                                        <i className="fa-brands fa-tiktok"></i>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-2 pr-4">
                            <p className="font-bold text-2xl">Information</p>
                            <ul className="mt-6 flex flex-col gap-4 opacity-80">
                                <li>
                                    <NavLink to="/">Privacy Policy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Refound Policy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Shipping Policy</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Teams Of Service</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Blogs</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-2 pr-4">
                            <p className="font-bold text-2xl">Account</p>
                            <ul className="mt-6 flex flex-col gap-4 opacity-80">
                                <li>
                                    <NavLink to="/">Search</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">About Us</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Blogs</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Blogs</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Blogs</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-2 pr-4">
                            <p className="font-bold text-2xl">Quick Links</p>
                            <ul className="mt-6 flex flex-col gap-4 opacity-80">
                                <li>
                                    <NavLink to="/">Acceessories</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Laptops</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Headphones</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Smarts Watches</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/">Tablets</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="col-span-3">
                            <p className="font-bold text-2xl">Our App</p>
                            <p className="mt-6 opacity-80">Download our App and get extra 15%  Discount on your first Order...!</p>
                            <div className="flex gap-1 items-center mt-4 flex-wrap">
                                <img className="w-[140px] h-[40px] object-cover rounded-md" src="../images/cplay.png" alt="" />
                                <img className="w-[140px] h-[40px] object-cover rounded-md" src="../images/app-store.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container py-4 flex items-center justify-between flex-wrap">
                <p className="opacity-80">Copyright 2024 - Digitic Powered by Shopify</p>
                <div className="flex items-center gap-2">
                    <img className="bg-white rounded-md w-[50px] h-[28px] object-cover" src="../images/visa.png" alt="" />
                    <img className="bg-white rounded-md w-[50px] h-[28px] object-cover" src="../images/vietcombank.png" alt="" />
                    <img className="bg-white rounded-md w-[50px] h-[28px] object-fill" src="../images/Paypal.png" alt="" />
                    <img className="bg-white rounded-md w-[50px] h-[28px] object-fill" src="../images/Paypal.png" alt="" />
                    <img className="bg-white rounded-md w-[50px] h-[28px] object-cover" src="../images/visa.png" alt="" />
                </div>
            </div>
            <button onClick={() => scrollToTop()} className="w-[37px] h-[37px] z-[9999] rounded-full bg-color-01 flex items-center justify-center text-black fixed right-12 bottom-12">
                <i className="fa-solid fa-angle-up"></i>
            </button>
        </footer>
    );
}

export default Fooder;
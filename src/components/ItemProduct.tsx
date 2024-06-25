import { NavLink } from "react-router-dom";
import InfoProducts from "./InfoProduct";

const ItemProduct = () => {
    return (
        <NavLink to="/detail" className="block shadow-shadow-1 rounded-md p-4 bg-white h-full group">
            <div className="flex items-center justify-between">
                <span className="px-2 py-1 bg-color-01 rounded-full">-33%</span>
                <i className="fa-regular fa-heart hover:text-color-03 cursor-pointer p-1"></i>
            </div>
            <figure className="relative pt-[80%] bg-white mt-4 mb-4">
                <img className="max-w-[80%] absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]" src="../images/products/iphone-15-pro-max_3.png" alt="" />
            </figure>
            <InfoProducts name="OPPO Reno10 5G 128GB" price={30} rating={2} sale={2} />
        </NavLink>
    );
};

export default ItemProduct;
import { Helmet } from "react-helmet-async";
import BreadCrumb from "../components/BreadCrumb";
import { NavLink } from "react-router-dom";

const Register = () => {
    return (
        <div>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
            <BreadCrumb title="Sign Up" />
            <div className="bg-color-04">
                <div className="container pt-20 pb-32">
                    <div className="max-w-[500px] rounded-md shadow-shadow-1 mx-auto p-8 bg-white">
                        <p className="text-title-2 font-bold text-center">Sign Up</p>
                        <input className="px-4 py-2 bg-color-04 rounded-sm w-full mt-4" type="text" placeholder="Email" />
                        <br />
                        <input className="px-4 py-2 bg-color-04 mt-4 rounded-sm w-full" type="text" placeholder="Password" />
                        <br />
                        <input className="px-4 py-2 bg-color-04 mt-4 rounded-sm w-full" type="text" placeholder="Confirm Password" />
                        <p className="opacity-opacity-1 mt-2 hover:underline cursor-pointer">Forgot your password?</p>
                        <div className="mt-8 flex items-center justify-center gap-4">
                            <button className="bg-color-01 rounded-full w-[100px] py-2 text-color-09 text-center hover:text-white">Sign Up</button>
                            <NavLink to="/login" className="bg-color-09 w-[100px] rounded-full py-2 text-white text-center hover:text-color-01">Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;
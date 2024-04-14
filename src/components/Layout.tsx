import { Outlet } from "react-router-dom";
import Fooder from "./Fooder"
import Header from "./Header"

const Layout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Fooder />
        </>
    );
};

export default Layout;
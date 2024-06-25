import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Detail from "../pages/Detail";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import OurStore from "../pages/OurStore";
import Register from "../pages/Register";
import SigleBlog from "../pages/SigleBlog";
import WishList from "../pages/WishList";

export const routes = [
    {
        index: true,
        path: "/",
        element: <HomePage />
    },
    {
        path: "about",
        element: <About />
    },
    {
        path: "contact",
        element: <Contact />
    },
    {
        path: "our-store",
        element: <OurStore />
    },
    {
        path: "blogs",
        element: <Blog />
    },
    {
        path: "contact",
        element: <Contact />
    },
    {
        path: "wishlist",
        element: <WishList />
    },
    {
        path: "login",
        element: <Login />
    },
    {
        path: "register",
        element: <Register />
    },
    {
        path: "id",
        element: <SigleBlog />
    },
    {
        path: "detail",
        element: <Detail />
    }
];
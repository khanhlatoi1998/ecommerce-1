import About from "../pages/About";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import HomePage from "../pages/HomePage";
import OurStore from "../pages/OurStore";

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
    }
];
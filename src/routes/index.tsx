import About from "../pages/About";
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
    }
];
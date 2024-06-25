import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Brand from "../components/Brand";
import FeaturedColection from "../components/FeaturedColection";
import News from "../components/News";
import PopularProducts from "../components/PopularProducts";
import ProductsTemplate from "../components/ProductsTemplate";
import SpecialProducts from "../components/SpecialProducts";

const HomePage = () => {
    return (
        <div className="">
            <Helmet>
                <title>Digitic</title>
            </Helmet>
            <Banner />
            <div className="bg-color-04 py-12">
                <div className="container">
                    <ProductsTemplate />
                    <FeaturedColection />
                    <SpecialProducts />
                    <PopularProducts />
                    <Brand />
                    <News />
                </div>
            </div>
        </div >
    );
};

export default HomePage;
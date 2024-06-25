import { NavLink } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';

const BreadCrumb: React.FC<{ title: string }> = (props) => {
    const { title } = props;

    return (
        <div className="bg-white px-4 py-6 text-center shadow-shadow-1">
            <NavLink to="/">
                Home /
            </NavLink>
            <span> {title}</span>
        </div>
    );
};

export default BreadCrumb;
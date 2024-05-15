import { NavLink } from "react-router-dom";

const BreadCrumb: React.FC<{ title: string }> = (props) => {
    const { title } = props;
    console.log(title)

    return (
        <div className="bg-white px-4 py-6 text-center shadow-shadow-1">
            <NavLink to="/">
                Home / {title}
            </NavLink>
        </div>
    );
};

export default BreadCrumb;
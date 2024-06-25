import { NavLink } from "react-router-dom";

interface Props {
    _id?: string | number;
    time: string;
    title: string;
    desc: string;
}

const BlogCart: React.FC<Props> = ({
    title, time, _id, desc
}) => {
    return (
        <NavLink to="/id" className="block bg-white rounded-md shadow-shadow-1 overflow-hidden">
            <div className="w-full  overflow-hidden relative pt-[60%]">
                <img src="../images/news/news1.jpg" className="w-full h-full absolute top-0 left-0 object-cover transition hover:scale-[1.04]" alt="" />
            </div>
            <div className="p-4 flex flex-col gap-y-2">
                <p className="opacity-opacity-1">{time}</p>
                <p className="text-title-2 font-medium line-clamp-1 capitalize">{title}</p>
                <p className="opacity-opacity-1 line-clamp-2">{desc}</p>
                <div>
                    <button className="p-4 py-2 mt-1 bg-color-09 text-white rounded-full hover:text-color-01">READ MORE</button>
                </div>
            </div>
        </NavLink>
    );
};

export default BlogCart;
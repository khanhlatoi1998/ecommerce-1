interface Props {
    name: string;
    rating: number;
    price: number;
    sale?: number
}

const InfoProducts: React.FC<Props> = ({
    name, rating, price, sale
}) => {
    const ratingStar = Array.from({ length: 5 }, (ele, idx) => {
        let number: number = idx + 0.5;
        return (
            <span key={idx}>
                {
                    rating >= idx + 1
                        ? (
                            <i className="fa-solid fa-star"></i>
                        )
                        : rating >= number
                            ? (
                                <i className="fa-solid fa-star-half-stroke"></i>
                            )
                            : (
                                <i className="fa-regular fa-star"></i>
                            )

                }
            </span>
        )
    })

    return (
        <>
            <div className="group cursor-pointer">
                <p className="font-medium h-[45px] group-hover:text-blue-500 capitalize">{name}</p>
                <div className="flex-item-center flex gap-[1px] text-yellow-300">
                    {
                        ratingStar
                    }
                </div>
                <div>
                    <span className="text-color-03">${price}.00 </span>
                    <span className="line-through opacity-60"> ${sale}.00</span>
                </div>
            </div>

        </>
    );
};


export default InfoProducts;

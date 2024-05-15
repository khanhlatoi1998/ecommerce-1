const RatingStar = (star: number) => {
    const ratingStar = Array.from({ length: 5 }, (ele, idx) => {
        let number: number = idx + 0.5;
        return (
            <span key={idx}>
                {
                    star >= idx + 1
                        ? (
                            <i className="fa-solid fa-star"></i>
                        )
                        : star >= number
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
    return ratingStar;
};

export default RatingStar;
export const RatingStar = (rating) => {
    const ratingStar = Array.from({ length: 5 }, (ele, idx) => {
        let number = idx + 0.5;
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
};
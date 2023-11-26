import React from "react";

const Item = ({ title, price, imageUrl }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>Price: Rs: {price}</p>
            <img src={imageUrl} alt={title} style={{ maxWidth: '100%' }} />
        </div>
    )
};

export default Item;
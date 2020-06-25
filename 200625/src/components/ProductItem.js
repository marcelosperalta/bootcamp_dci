import React from "react";

const ProductItem = (props) => {
    const { id, productName, icon, price, inventory } = props.info;
    return (
        <div className="container" key={id}>
            <table>
                <tr>
                    <td className="iconProduct">{icon}</td>
                    <td className="productName">{productName}</td>
                    <td className="price">{price}</td>
                    <td>
                        <button disabled={inventory === 0}>
                            {inventory > 0 ? "Add to cart" : "Sold out"}
                        </button>
                    </td>
                    <td className="inventory">{inventory}</td>
                </tr>
            </table>
        </div>
    );
};

export default ProductItem;
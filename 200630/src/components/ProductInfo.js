import React from "react";
//const ProductInfo = ({match}) => {
const ProductInfo = (props) => {
    console.log(props);
    //const selectedItem = props.data.filter((item) => item.id == match.params.id);
    const selectedItem = props.data.filter((item) => item.id == props.id);
    const moreInfo = selectedItem.map((item) => {
        const { id, productName, icon } = item;
        return (
            <div key={id}>
                <h3>{productName}</h3>
                <i>{icon}</i>
            </div>
        );
    });
    return (
        <React.Fragment>
            <h3>Product farther infos</h3>
            {moreInfo}
        </React.Fragment>
    );
};

export default ProductInfo;
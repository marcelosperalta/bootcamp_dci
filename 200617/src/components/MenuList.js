import React from "react";

const MenuList = (props) => {
    const images = props.menuData.map((item) => {
        const { id, name, url } = item;
        return <img src={url} key={id} alt={name} className="imgBox" />;
    });
    return <div>{images}</div>;
};

export default MenuList;
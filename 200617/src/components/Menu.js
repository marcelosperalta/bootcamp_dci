import React from "react";
import MenuList from "./MenuList";

const Menu = (props) => {
    return (
        <React.Fragment>
            <h1>Hi I am component, {props.propsName}</h1>
            <MenuList age="30" name={props.propsName} menuData={props.info} />
            {console.log(props)}
        </React.Fragment>
    );
};

export default Menu;
import React from "react";

const UserList = (props) => {
    const toDos = props.list.map((item, i) => <li key={i}>{item}</li>);
    return <ul>{toDos}</ul>;
};

export default UserList;
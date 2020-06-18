import React from "react";

const UserList = (props) => {
    const toDos = props.list.map((item) => (
        <li key={item.id}>
            <input
                className="list"
                type="checkbox"
                value={item.done}
                onChange={() => {
                    props.check(item.id);
                }}
            />
            {item.title}
            <i
                className="item"
                onClick={() => {
                    console.log(item);
                    props.del(item.id);
                }}>
                🗑
            </i>

        </li>
    ));
    return <span>{toDos}</span>;
};

export default UserList;

// <ul>{toDos}</ul>;
// {<div className="item">item.title</div>}
import React from "react";

const UserList = (props) => {
    const toDos = props.list.map((item, i) => (
        <li key={i}>
            {item}{" "}
            <i
                onClick={() => {
                    console.log(item);
                    props.del(item);
                }}
            >
                🗑
      </i>
        </li>
    ));
    return <ul>{toDos}</ul>;
};

export default UserList;
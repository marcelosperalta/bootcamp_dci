import React, { Fragment, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import InfoDetails from "./InfoDetails";

const AddInfoForm = ({ addNewData }) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const submitHandle = (e) => {
    e.preventDefault();
    addNewData({ name: userName, age: userAge });
  };
  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value.trim())}
      />
      <input
        type="text"
        value={userAge}
        onChange={(e) => setUserAge(e.target.value.trim())}
      />
      <input type="submit" value="send" />
    </form>
  );
};

const Info = () => {
  const [data, setData] = useContext(DataContext);
  console.log(data);
  const addNewData = (obj) => {
    const newArr = [...data, obj];
    setData(newArr);
  };
  return (
    <Fragment>
      <h2>Info</h2>
      {data.map((item, i) => (
        <InfoDetails item={item} key={i} />
      ))}
      <AddInfoForm addNewData={addNewData} />
    </Fragment>
  );
};

export default Info;

import React, { Fragment } from "react";

const InfoDetails = ({ item }) => {
  return (
    <Fragment>
      <h2>{item.name}</h2>
      <span>{item.age}</span>
    </Fragment>
  );
};
export default InfoDetails;

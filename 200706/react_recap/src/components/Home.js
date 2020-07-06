import React from "react";

const Home = ({ namesArr }) => {
  return (
    <h1>
      Home,
      {namesArr.map((name, i) => (
        <div key={i}>{name}</div>
      ))}
    </h1>
  );
};

export default Home;

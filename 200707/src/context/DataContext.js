import React, { useState, createContext } from "react";

const DataContext = createContext();

const DataProvider = (props) => {
  const [data, setData] = useState([
    { name: "Ali", age: 22 },
    { name: "Zain", age: 24 },
    { name: "Nancy", age: 40 },
  ]);
  return (
    <DataContext.Provider value={[data, setData]}>
      {props.children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };

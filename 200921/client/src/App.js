import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("/users")
      .then((result) => result.json())
      .then((data) => setUsers(data));
  }, []);

  const usersArr = users.map((user) => <h4 key={user._id}>{user.userName}</h4>);
  return <div className="App">{usersArr}</div>;
}

export default App;

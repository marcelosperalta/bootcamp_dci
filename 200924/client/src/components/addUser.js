import React, { useState } from "react";
import axios from "axios";
function AddForm() {
  // const [newUser, setNewUsers] = useState({
  //   userName: "",
  //   password: "",
  //   confPassword: "",
  // });
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const name = e.target.name;

  //   setNewUsers({ ...newUser, [name]: value });
  // };
  const handleUpload = (e) => {
    setAvatar(e.target.files[0]);
  };
  const submitHandle = async (e) => {
    e.preventDefault();
    console.log(newUser);
    const data = new FormData();
    data.append("userName", userName);
    data.append("password", password);
    data.append("confPassword", confPassword);
    data.append("avatar", avatar);

    try {
      const result = await axios.post("/register", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(result.data.message);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <h4>New User</h4>
      <form onSubmit={submitHandle}>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          // onChange={handleChange}
          value={userName}
          // value={newUser.userName}
        />

        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          // onChange={handleChange}
          value={password}
          //value={newUser.password}
        />

        <input
          type="password"
          name="confPassword"
          id="confPassword"
          placeholder="Confirm password"
          onChange={(e) => setConfPassword(e.target.value)}
          // onChange={handleChange}
          value={confPassword}
          //value={newUser.confPassword}
        />
        <input type="file" name="avatar" id="avatar" onChange={handleUpload} />
        <input type="submit" value="Register" />
      </form>
    </div>
  );
}

export default AddForm;

import React, { useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import addAccount from "../action/account";
import { useHistory } from "react-router-dom";

const LoginComponent = () => {
  let history = useHistory();

  const [username, setUsername] = useState("");
  const dispatch = useDispatch();

  const handleChange = e => {
    setUsername(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (username) {
      dispatch(addAccount({ username: username }));
      console.log(username);
      setUsername("");
      history.push("/World Chatbox");
    }
  };

  return (
    <div className="loginWindow">
      <h1 style={{ textAlign: "center" }}>
        <span>Entrez votre username</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          pattern="[^\s]+"
          onChange={handleChange}
        />
        <button type="submit">OK</button>
      </form>
    </div>
  );
};

export default LoginComponent;

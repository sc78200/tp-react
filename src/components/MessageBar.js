import React, { useState } from "react";
import { addMessage } from "../action/message";
import { useDispatch, useSelector } from "react-redux";

const inputStyle = {
  borderRadius: 10,
  border: "none",
  fontSize: 16,
  padding: 10,
  marginRight: 10,
  flexGrow: 1
};
const buttonStyle = {
  borderRadius: 10,
  cursor: "pointer",
  fontSize: 20,
  color: "#336E7B",
  fontWeight: "bold",
  padding: 10,
  flexGrow: 1,
  border: "3px solid #336E7B",
  backgroundColor: "transparent"
};

const MessageBar = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const inputUser = useSelector(state => state.account.account.slice(-1)[0]);

  const handleChange = e => {
    setMessage(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (message) {
      dispatch(addMessage({ message: message }, inputUser.account));
      setMessage("");
    }
  };

  return (
    <form onSubmit={this.handleSubmit} style={{ display: "flex", padding: 10 }}>
      <input
        value={this.message}
        onChange={this.handleChange}
        placeholder="Votre message"
        type="text"
        style={inputStyle}
      />
      <br />
      <button type="submit" style={buttonStyle}>
        Envoyer
      </button>
    </form>
  );
};
export default MessageBar;

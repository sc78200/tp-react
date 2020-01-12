import React, { useState } from "react";
import MessageList from "./MessageList";
import MessageBar from "./MessageBar";

const chatStyle = {
  borderRadius: 10,
  fontFamily: "Montserrat",
  width: 400,
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "grey",
  padding: 10,
  display: "flex",
  flexDirection: "column"
};

const titleStyle = {
  paddingLeft: 10,
  paddingTop: 10,
  fontSize: 30
};

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = message => {
    setMessages([...messages, { body: message, username: "me" }]);
  };

  return (
    <div style={chatStyle}>
      <div style={titleStyle}>
        <span role="img" aria-label="langue">
          🌍
        </span>{" "}
        Chatbox live
      </div>
      <div>
        <MessageList messages={messages} />
        <MessageBar handleMessageSubmit={handleMessageSubmit} />
      </div>
    </div>
  );
};

export default Chat;

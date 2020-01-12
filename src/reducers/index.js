import React from "react";
import account from "./account";
import { combineReducers } from "redux";
import messages from "./message";

export default combineReducers({
  message: messages,
  accounts: account
});

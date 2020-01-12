import React from "react";
import logo from "./logo.svg";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers/message";
import Chat from "./components/Chat";
import "./App.css";
import logger from "./service/middleware";
import Route from "./router/route";

let store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <Route />
      <Chat />
    </Provider>
  );
}

export default App;

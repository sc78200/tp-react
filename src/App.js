import React from "react";
//import Movies from "./exo-api/getMovies";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import allReducers from "./reducers";
import "./App.css";
import logger from "./service/middleware";
import Route from "./router/route";

//console.log(Movies);

const store = createStore(allReducers, applyMiddleware(logger));

function App() {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;

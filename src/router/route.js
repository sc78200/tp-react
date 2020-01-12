import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "../components/Login";
import Chat from "../components/Chat";
import { useSelector } from "react-redux";

const Routes = () => {
  const nbAccount = useSelector(state => state.accounts.accounts.length);

  return (
    <Router>
      <nav>
        <span>
          <Link to="/">Connexion</Link>
        </span>
        {nbAccount !== 0 && (
          <span>
            <Link to="/World_Chatbox">World Chatbox</Link>
          </span>
        )}
      </nav>

      <Switch>
        <Route path="/World_Chatbox">
          {nbAccount !== 0 ? <Chat /> : <Login />}
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Route;

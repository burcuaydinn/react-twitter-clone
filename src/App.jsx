import React from "react";
import LoginForm from "./pages/LoginForm";
import HomePage from "./pages/HomePage";
import "./index.css";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <LoginForm />
      </Route>
      <Route path="/home">
        <HomePage />
      </Route>
    </Switch>
  );
}

export default App;

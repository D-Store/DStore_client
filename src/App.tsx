import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignUpPage} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;

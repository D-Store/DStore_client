import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">hi</div>
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;

import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import useInput from "./Hooks/useInput";

function App() {
  const text = useInput();
  return (
    <RecoilRoot>
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              hi
              <input type="text" {...text} />
            </div>
          </Route>
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;

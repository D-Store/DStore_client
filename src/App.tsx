import * as Pages from 'pages';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'styles/App.scss';

function App() {
  return (
    <Router>
      <Route exact path="/">
        <Pages.WelcomePage />
      </Route>
    </Router>
  );
}

export default App;

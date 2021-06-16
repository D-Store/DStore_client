import React from "react";
import ReactDOM from "react-dom";
import App from "layouts/App";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production"
    ? "http://10.80.162.184:8080"
    : "http://10.80.162.184:8080";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
    <div id="root-modal"></div>
  </React.StrictMode>,
  document.getElementById("root")
);

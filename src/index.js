import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
serviceWorkerRegistration.register();

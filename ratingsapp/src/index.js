import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { Provider } from "react-redux";
import App from "./App";
// import store from "./Redux/Store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider> */}
    <App />
    {/* </Provider> */}
  </React.StrictMode>
);

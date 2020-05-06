import React from "react";
import ReactDOM from "react-dom";
import "./styles/normalize.css";
import "./styles/skeleton.css";
import "./styles/index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Provider from "./context/AppContext";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

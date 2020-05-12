import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import FavoritesProvider from "./features/favorites/favoritesContext";
import UIProvider from "./features/ui/UIContext";

import "./styles/normalize.css";

ReactDOM.render(
  <React.StrictMode>
    <FavoritesProvider>
      <UIProvider>
        <App />
      </UIProvider>
    </FavoritesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();

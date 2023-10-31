import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import { UserContextProvider } from "./contexts/userContext.jsx";
import { AuthContextProvider } from "./contexts/AuthContext";
import { ArticleContextProvider } from "./contexts/ArticleContext.jsx";
import { TotalUsersProvider } from "./contexts/TotalUsersProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ArticleContextProvider>
          <TotalUsersProvider>
            <AuthContextProvider>
              <App />
            </AuthContextProvider>
          </TotalUsersProvider>
        </ArticleContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

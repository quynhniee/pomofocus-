import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CustomTheme from "./config/theme";
import TabsProvider from "./store/Provider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CustomTheme>
      <TabsProvider>
        <App />
      </TabsProvider>
    </CustomTheme>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import CustomTheme from "./config/theme";
import TabsProvider from "./store/Provider";
import { Provider } from "react-redux";
import store from "./redux/auth";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CustomTheme>
        <TabsProvider>
          <App />
        </TabsProvider>
      </CustomTheme>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

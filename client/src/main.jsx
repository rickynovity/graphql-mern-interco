import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ConfigProvider } from "antd";
import { configProviderTheme } from "./lib";
import Layout from "./components/Layout.jsx";
import AvaDotBackground from "./components/ui/AvaDotBackground.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={configProviderTheme}>
      <BrowserRouter>
        <AvaDotBackground>
          <Layout>
            <App />
          </Layout>
        </AvaDotBackground>
      </BrowserRouter>
    </ConfigProvider>
  </React.StrictMode>
);

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PhotosProvider from "./context/PhotosContext.jsx"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <PhotosProvider>
      <App />
    </PhotosProvider>
    </BrowserRouter>
  </React.StrictMode>
);

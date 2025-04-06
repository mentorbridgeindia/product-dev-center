import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Listing } from "./Listing";
import "./App.css";
import { Profile } from "./Profile";
import { Products } from "./Products";
import { ProductDetail } from "./ProductDetail";
import { About } from "./About";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Listing />} />
        <Route path="/about" element={<About />} />
        <Route path="/:id" element={<Profile />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

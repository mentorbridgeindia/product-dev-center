import { Analytics } from "@vercel/analytics/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./About";
import "./App.css";
import "./index.css";
import { Listing } from "./Listing";
import { ProductDetail } from "./ProductDetail";
import { Products } from "./Products";
import { Profile } from "./Profile";

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
    <Analytics />
  </React.StrictMode>
);

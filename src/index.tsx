import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import { Listing } from "./Listing";
import "./App.css";
import { Profile } from "./Profile";
import { Analytics } from "@vercel/analytics/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Listing />} />
        <Route path="/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
    <Analytics />
  </React.StrictMode>
);

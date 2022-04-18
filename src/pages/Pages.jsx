import React from "react";
import Home from "./Home";
import Login from "./Login";
import Searched from "./Searched";
import Recipe from "./Recipe";
import WishList from "./WishList";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;

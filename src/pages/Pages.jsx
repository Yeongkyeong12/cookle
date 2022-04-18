import React from "react";
import Home from "./Home";
import Login from "./Login";
import Searched from "./Searched";
import Recipe from "./Recipe";
import WishList from "./WishList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function Pages() {
  return (
    <AnimatePresence exitBeforeEnter>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default Pages;

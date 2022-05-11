import React from "react";
import { NativeRouter, Route, Routes } from "react-router-native";
import CheckoutCart from "./pages/CheckoutCart";
import Home from "./pages/Home";

const App = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route  path="/checkout" element={<CheckoutCart />} />
      </Routes>
    </NativeRouter>
  );
};

export default App;

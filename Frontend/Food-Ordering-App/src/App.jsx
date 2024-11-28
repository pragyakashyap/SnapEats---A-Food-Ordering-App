import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout, Home, Login, Product, Register } from "./pages";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Specify weight
import Payment from "./pages/payment";
import OrderPlaced from "./pages/orderPlaced";
import Address from "./pages/address";
import Profile from "./pages/profile";

function App() {
  return (
    <>
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/payment" element={<Payment />} />
          <Route path="/orderPlaced" element={<OrderPlaced />} />
          <Route path="/address" element={<Address />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

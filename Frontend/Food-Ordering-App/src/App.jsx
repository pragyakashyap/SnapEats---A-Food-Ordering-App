import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Checkout, Home, Login, Product, Register } from "./pages";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Specify weight
import Payment from "./pages/payment";
import OrderPlaced from "./pages/orderPlaced";
import Address from "./pages/address";
import Profile from "./pages/profile";

import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./ProtectedRoute";
import DealsSection from "./pages/home/deals";
import Restaurant from "./pages/home/restaurants";
import Categories from "./pages/home/categories";

function App() {
  return (
    <>
     <Toaster />
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<ProtectedRoute><Product /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>}/>
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
          <Route path="/orderPlaced" element={<ProtectedRoute><OrderPlaced /></ProtectedRoute>} />
          <Route path="/address" element={<ProtectedRoute><Address /></ProtectedRoute>} />
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

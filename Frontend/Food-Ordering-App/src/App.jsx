import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Login, Product, Register } from "./pages";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/700.css"; // Specify weight

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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

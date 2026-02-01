import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Order from "./pages/Order.jsx";
import Success from "./pages/Success.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/order" element={<Order />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
} 


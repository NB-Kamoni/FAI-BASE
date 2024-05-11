import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import { AuthProvider } from "./contexts/authContext/AuthContext";
import Dashboard from "./components/home/Dashboard";
import Services from "./components/services/Services";
import Notebooks from "./components/notebooks/Notebooks";
import Market from "./components/market/Market";
import Chickensbook from "./components/notebooks/Chickensbook"
import Cowsbook from "./components/notebooks/Cowsbook"
import Analytics from "./components/analytics/Analytics"
import Hodari from "./components/hodari/Hodari"
import Inventory from "./components/inventory/Inventory"
import Training from "./components/training/Training"
import Help from "./components/help/Help"
import Account from "./components/account/Account";



function App() {
  return (

    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/notebooks" element={<Notebooks />} />
          <Route path="/chickens" element={<Chickensbook />} />
          <Route path="/cows" element={<Cowsbook />} />
          <Route path="/market" element={<Market />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/hodari" element={<Hodari />} />
          <Route path="/help" element={<Help />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/training" element={<Training />} />
          <Route path="/account" element={<Account />} />

        </Routes>
      </Router>
    </AuthProvider>
  
  );
}

export default App;

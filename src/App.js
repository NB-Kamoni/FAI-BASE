import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { AuthProvider } from "./contexts/authContext/AuthContext";
import HomeLoggedin from "./components/home/HomeLoggedin";

function App() {
  return (

    <AuthProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homeLoggedin" element={<HomeLoggedin />} />
        </Routes>
      </Router>
    </AuthProvider>
  
  );
}

export default App;

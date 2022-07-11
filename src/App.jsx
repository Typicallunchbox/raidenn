import React from "react";
import Login from "./components/login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Wishlist } from "./pages/Wishlist";
import { Settings } from "./pages/Settings";
import { ErrorPage } from "./pages/ErrorPage";
import { CreateAccount } from "./pages/CreateAccount";

const App = () => {
  return (
    <Router>
      {/* <nav>
        <Link to="/">Login</Link>
        <Link to="/home">Home</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/wishlist">Wishlist</Link>
      </nav> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default App;

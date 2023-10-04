import { Routes, Route } from "react-router-dom";
import RegisterPage from "../src/Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/Login/LoginPage";
import ForgotPasswordPage from "./Pages/Forgot Password/ForgotPasswordPage";
import Home from "../src/Pages/HomePage/Home";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;

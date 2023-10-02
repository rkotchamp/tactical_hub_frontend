import { Routes, Route } from "react-router-dom";
import RegisterPage from "../src/Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/Login/LoginPage";
import ForgotPasswordPage from "./Pages/Forgot Password/ForgotPasswordPage";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      </Routes>
    </>
  );
}

export default App;

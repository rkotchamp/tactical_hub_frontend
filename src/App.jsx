import { Routes, Route } from "react-router-dom";
import RegisterPage from "../src/Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/Login/LoginPage";
import ForgotPasswordPage from "./Pages/Forgot Password/ForgotPasswordPage";
import Home from "../src/Pages/HomePage/Home";
import EditProfile from "../src/Pages/Edit/EditProfile";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import LoadingSpinner from "./Components/LoaderSpinner/LoadingSpinner";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/loading" element={<LoadingSpinner />} />
      </Routes>
    </>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import RegisterPage from "../src/Pages/RegisterPage/RegisterPage";
import LoginPage from "./Pages/Login/LoginPage";
import ForgotPasswordPage from "./Pages/Forgot Password/ForgotPasswordPage";
import Home from "../src/Pages/HomePage/Home";
import EditProfile from "../src/Pages/Edit/EditProfile";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import LoadingSpinner from "./Components/LoaderSpinner/LoadingSpinner";
import { useContext } from "react";
import AuthContext from "./contexts/AuthContext";
import ProtectedRoute from "./Routes/ProtectedRoutes";
import Logout from "./Components/Logout.jsx/Logout";
import "./App.css";

function App() {
  const { isAuthenticated } = useContext(AuthContext);
  

  return (
    <>
      <Routes>
        <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route path='/profile/:${}' element={<ProfilePage />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="/home" element={<Home />} />
        </Route>

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/loading" element={<LoadingSpinner />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </>
  );
}

export default App;

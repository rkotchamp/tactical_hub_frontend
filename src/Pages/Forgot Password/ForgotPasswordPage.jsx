import ForgotPassword from "../../Components/ForgotPassWord/ForgotPassword";
import { Link } from "react-router-dom";
import "./ForgotPasswordPage.css";

function ForgotPasswordPage() {
  return (
    <div>
      <div className="forgetPasswordContainer">
        <div className="forgotContent">
          <h1>Enter Valid email</h1>
          <ForgotPassword />
          <p className="text">
            Do you want to login instead?{" "}
            <Link to="/login">
              <span className="customSpan">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordPage;

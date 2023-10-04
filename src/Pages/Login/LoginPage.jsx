import Login from "../../Components/Login/Login";
import "./Login.css";

function LoginPage() {
  return (
    <div>
      <div className="loginContainer">
        <div className="loginContent">
          <h1>Login Form</h1>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

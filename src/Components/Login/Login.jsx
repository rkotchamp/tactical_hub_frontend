import "./Login.css";

function Login() {
  return (
    <div>
      <form action="">
        <div>
          <input type="email" placeholder="Email" className="input" />
        </div>
        <div>
          <input type="password" placeholder="Password" className="input" />
        </div>
      </form>
      <button type="submit" className="btnTab">
        Login
      </button>
      <p>
        Do not have an account? <span className="colorChange">Register</span>
      </p>
      <p className="colorChange">Forgot Password?</p>
    </div>
  );
}

export default Login;

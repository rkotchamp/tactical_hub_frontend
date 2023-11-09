import { Link } from "react-router-dom";
import "./Landingpage.css";

function LandingPage() {
  return (
    <div className="landing__container">
      <div className="headers">
        <h1>
          Unite
          <br />
          Communicate
          <br /> Serve
        </h1>
        <p>Exclusive Hub for Regimental Excellence</p>
      </div>

      <div className="btnsContainer">
        <Link to="/register">
          <button className="btn">Register</button>
        </Link>
        <Link to="/login">
          <button className="btn">Login</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;

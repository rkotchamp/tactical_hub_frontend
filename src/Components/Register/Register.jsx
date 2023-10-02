import Button from "../Button/Button";

import "./Register.css";

function Register() {
  return (
    <div>
      <form className="form">
        <div>
          <input type="text" placeholder="First Name" className="input" />
        </div>
        <div>
          <input type="text" placeholder="Last Name" className="input" />
        </div>
        <div>
          <input type="email" placeholder="Email" className="input" />
        </div>
        <div>
          <input type="password" placeholder="Password" className="input" />
        </div>
        <div>
          <input type="text" placeholder="Service Rank" className="input" />
        </div>
        <div>
          <input type="text" placeholder="Institution" className="input" />
        </div>
      </form>
      <Button type="submit" NewclassName="btnTab" text="Register" />
      <p className="text">
        Already have an account? <span>Login</span>
      </p>
    </div>
  );
}

export default Register;

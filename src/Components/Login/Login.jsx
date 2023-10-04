import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import api from "../../api/api";

import "./Login.css";

function Login() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const loginUser = (data) => {
    api.post("/users/login", data).then((response) => console.log(response));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(loginUser)}>
        <div>
          <input
            type="email"
            placeholder="Email"
            className="input"
            {...register("email", { required: "Email is invalid" })}
          />
          <p>{errors.email?.message}</p>
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            className="input"
            {...register("password", { required: "Password is incorrect" })}
          />
          <p className="errLog">{errors.email?.message}</p>
        </div>
        <Button type="submit" NewclassName="btnTab" text="Login" />
      </form>

      <p>
        Do not have an account?
        <Link to="/register">
          <span className="colorChange">Register</span>
        </Link>
      </p>
      <Link to="/forgot-password">
        <p className="colorChange">Forgot Password?</p>
      </Link>
    </div>
  );
}

export default Login;

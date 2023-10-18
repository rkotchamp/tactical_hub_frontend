import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import api from "../../api/api";
import Cookies from "js-cookie";
import { useContext, useState } from "react";
import UserContext from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  //UseForm
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  ///Routs
  const navigate = useNavigate();

  //useContext
  const { setUser } = useContext(UserContext);

  const loginUser = (data) => {
    console.log(data);
    api
      .post("/users/login", data)
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data.token);
          Cookies.set("user_token", response.data.token);
          let config = {
            headers: {
              Authorization: "Bearer " + response.data.token,
            },
          };

          api
            .get("/users", config)
            .then((res) => {
              if (res.status === 200) {
                console.log(res.data);
                setUser(res.data);
                navigate("/home");
              } else {
                console.error("Error while fetching data".res.status);
              }
            })
            .catch((err) => {
              console.error("Error during data request", err);
            });
        } else {
          console.error("Login Failed", response.status);
        }
      })
      .catch((err) => {
        console.error("Login request Error", err);
      });
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

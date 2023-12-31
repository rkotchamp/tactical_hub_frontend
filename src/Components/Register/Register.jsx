import Button from "../Button/Button";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Link } from "react-router-dom";
import api from "../../api/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Register.css";

function Register() {
  // use state
  const [submitErrors, setSubmitErrors] = useState("");

  //use Navigate
  const navigate = useNavigate();

  //use form
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const createNewUser = (data) => {
    api
      .post("/users/register", data)
      .then((results) => {
        if (results.status === 201) {
          setSubmitErrors("");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.error(err);
        setSubmitErrors("This user or email is already in use");
      });
  };
  return (
    <>
      <form
        className="formWrapper"
        onSubmit={handleSubmit(createNewUser)}
        noValidate
      >
        <div className="formDivs">
          <input
            type="text"
            placeholder="First Name"
            className="input"
            {...register("first_name", { required: "First Name is required" })}
          />
          <p className="errorParagraph">{errors.first_name?.message}</p>
        </div>
        <div className="formDivs">
          <input
            type="text"
            placeholder="Last Name"
            className="input"
            {...register("last_name", { required: "Last Name is required" })}
          />
          <p className="errorParagraph">{errors.last_name?.message}</p>
        </div>
        <div className="formDivs">
          <input
            type="email"
            placeholder="Email"
            className="input"
            {...register("email", { required: "Enter a valid password" })}
          />
          <p className="errorParagraph">{errors.email?.message}</p>
        </div>
        <div className="formDivs">
          <input
            type="password"
            placeholder="Password"
            className="input"
            {...register("password", { required: "Password is required" })}
          />
          <p className="errorParagraph">{errors.password?.message}</p>
        </div>
        <div className="formDivs">
          <input
            type="text"
            placeholder="Service Rank example: sgt for a sergeant"
            className="input"
            {...register("service_rank", { required: "Enter your rank" })}
          />
          <p className="errorParagraph">{errors.service_rank?.message}</p>
        </div>
        <div className="formDivs">
          <input
            type="text"
            placeholder="Institution"
            className="input"
            {...register("institution", { required: "Enter your institution" })}
          />
          <p className="errorParagraph">{errors.institution?.message}</p>
        </div>
        <div className="formDivs">
          <input
            type="text"
            placeholder="Department"
            className="input"
            {...register("department", { required: "Enter your department" })}
          />
          <p className="errorParagraph">{errors.department?.message}</p>
        </div>
        <Button type="submit" NewclassName="btnTab" text="Register" />
      </form>

      {/* <DevTool control={control} /> */}
      <p className="text">
        Already have an account?
        <Link to="/login">
          <span className="spanStyle">Login</span>
        </Link>
      </p>
    </>
  );
}

export default Register;

import { useForm } from "react-hook-form";
import Button from "../Button/Button";
import "./ForgotPassword.css";

function ForgotPassword() {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const handleForgot = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleForgot)}>
        <input
          type="email"
          placeholder="Enter your email"
          className="input"
          {...register("email", { required: "enter a valid email address" })}
        />
        <Button type="submit" NewclassName="btnTab" text="send Email" />
      </form>
      <p className="errormessage">{errors.email?.message}</p>
    </div>
  );
}

export default ForgotPassword;

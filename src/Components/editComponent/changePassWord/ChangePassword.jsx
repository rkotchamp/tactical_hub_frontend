import { useForm } from "react-hook-form";
import Button from "../../Button/Button";
import "./ChangePassword.css";

function ChangePassword() {
  const form = useForm();
  const { register, handleSubmit } = form;
  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form
        className="form"
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
      >
        <div>
          <input
            type="password"
            placeholder="old password"
            className="inputField"
            {...register("old_password", {
              required: "Enter your old password",
            })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="new password"
            className="inputField"
            {...register("new_password", {
              required: "Enter your new password",
            })}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="confirm password"
            className="inputField"
            {...register("confirm_password", {
              required: "Password must match your new  password",
            })}
          />
        </div>
        <Button
          text="change password"
          NewclassName="btnTabLogs"
          type="submit"
        />
      </form>
    </div>
  );
}

export default ChangePassword;

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
    <div className="edit__form_input_container">
      <form className="formInput" onSubmit={handleSubmit(handleFormSubmit)}>
        <div>
          <input
            type="password"
            placeholder="current password"
            className="inputFields"
            {...register("current_password")}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="new password"
            className="inputFields"
            {...register("new_password")}
          />
        </div>
        <div>
          <input
            type="password"
            className="inputFields"
            placeholder="confirm new password"
            {...register("confirm_password")}
          />
        </div>

        <div>
          <Button text="Submit" type="submit" NewclassName="btnTabLogs btns" />
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;

import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import Cookies from "js-cookie";
import "./Logout.css";

function Logout({ closeLogout, click }) {
  const navigate = useNavigate();

  const logoutUser = () => {
    Cookies.remove("user_token");
    localStorage.clear;
    navigate("/login");
  };

  return (
    <div className="logout__container">
      <button className="exit" onClick={closeLogout}>
        &times;
      </button>
      <div className="queryContainer">
        <div className="textSpace">
          <p>Are you sure you want to log out?</p>
        </div>
        <div className="buttonsDiv">
          <Button
            NewclassName="btns btnYes"
            text="Yes,logout"
            clicOption={logoutUser}
          />
          <Button
            NewclassName="btns btnNo"
            text="No,cancel"
            clicOption={click}
          />
        </div>
      </div>
    </div>
  );
}

export default Logout;

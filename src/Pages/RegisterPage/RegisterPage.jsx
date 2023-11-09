import { useState } from "react";

import Register from "../../Components/Register/Register";

import "./RegisterPage.css";

function RegisterPage() {
  return (
    <div>
      <div className="registerContainer">
        <div className="containLogs">
          <h1>Register Form</h1>
          <Register />
        </div>
        <h1 className="boldText">{/* <span>Be</span> Confidential! */}</h1>
      </div>
    </div>
  );
}

export default RegisterPage;

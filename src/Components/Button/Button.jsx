import "./Button.css";

function Button({ type, NewclassName, text }) {
  return (
    <div>
      <button className={NewclassName} type={type ? type : null}>
        {text}
      </button>
    </div>
  );
}

export default Button;

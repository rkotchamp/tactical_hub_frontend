import "./Button.css";

function Button({ type, NewclassName, text, clicOption }) {
  return (
    <div>
      <button
        className={NewclassName}
        type={type ? type : null}
        onClick={clicOption ? clicOption : null}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;

function Button({ type, NewclassName, text }) {
  return (
    <div>
      <button className={NewclassName} type={type}>
        {text}
      </button>
    </div>
  );
}

export default Button;

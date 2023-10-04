import "./LinksNav.css";

// eslint-disable-next-line react/prop-types
function LinksNav({ text }) {
  return (
    <div className="linkContainer">
      <p>{text}</p>
    </div>
  );
}

export default LinksNav;

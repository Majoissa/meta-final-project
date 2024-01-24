import "./Button.css";
function Button({ text, onClick }) {
  return (
    <>
      <button className="buttonComp" onClick={onClick}>
        {text}
      </button>
    </>
  );
}

export default Button;

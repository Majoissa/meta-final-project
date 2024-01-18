import "./Title.css";
function TitleText({ text, color }) {
  return (
    <h1 className="generalTitle" style={{ color: color }}>
      {text}
    </h1>
  );
}

export default TitleText;

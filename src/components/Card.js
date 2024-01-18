import "../App.css";
import bike from "../images/bike.jpg";
function Card({ direction, description, title, text, price, order }) {
  return (
    <article className="card">
      <img className="cardImg" src={direction} alt={description} />
      <article className="title">
        <h3>{title}</h3>
        <h4 className="price">{price}</h4>
      </article>
      <p>{text}</p>
      <article className="orderDelivery">
        <h4>{order}</h4>
        <img src={bike} alt="order a delivery" />
      </article>
    </article>
  );
}

export default Card;

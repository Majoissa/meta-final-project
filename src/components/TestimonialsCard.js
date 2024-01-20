import "./TestimonialsCard.css";
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

function TestimonialsCard() {
  const [userData, setUserData] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);

  useEffect(() => {
    //obtener datos del usuario
    fetch("https://randomuser.me/api/")
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        setUserData({
          name: `${user.name.first} ${user.name.last}`,
          photo: user.picture.large,
        });
      });

    //Obtener texto de reseña
    fetch("https://fakerapi.it/api/v1/texts?_quantity=1&_characters=100")
      .then((response) => response.json())
      .then((data) => {
        setReviewText(data.data[0].content);
      });

    //Generar calificacion aleatoria entre 3 y 5
    setRating(Math.floor(Math.random() * 3) + 3);
  }, []);
  return (
    <>
      <article className="testimonial-card">
        <div className="cardElements">
          <div className="testimonial-rating">
            {Array.from({ length: rating }, (_, index) => (
              <FaStar key={index} className="starIcon" />
            ))}
          </div>
          <div className="testimonial-content">
            {userData && (
              <img
                src={userData.photo}
                alt={userData.name}
                className="testimonial-image"
              />
            )}
            {userData && <p className="testimonial-name">{userData.name}</p>}
            <p className="testimonial-text">{reviewText}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default TestimonialsCard;

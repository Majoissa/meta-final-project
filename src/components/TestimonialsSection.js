import TestimonialsCard from "./TestimonialsCard";
import "./TestimonialsCard.css";
import TitleText from "./generals/TitleText";
import React, { useRef } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

function TestimonialsSection() {
  const scrollContainerRef = useRef();

  const handleLeftClick = () => {
    //Desplaza a la izquierda
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const handleRightClick = () => {
    //Desplaza a la derecha
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="test-section">
        <IoIosArrowBack
          onClick={handleLeftClick}
          className="arrow fa-arrow-left"
        />
        <div className="testimonials-container">
          <TitleText
            text="Testimonials"
            color="white"
            className="testimTitle"
          />
          <section ref={scrollContainerRef} className="testimonials-section">
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
            <TestimonialsCard />
          </section>
        </div>
        <IoIosArrowForward
          onClick={handleRightClick}
          className="arrow fa-arrow-right"
        />
      </div>
    </>
  );
}

export default TestimonialsSection;

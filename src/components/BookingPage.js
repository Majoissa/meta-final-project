import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingForm from "./BookingForm";
import { useState } from "react";

const BookingPage = () => {
  const [reservations, setReservations] = useState({});
  const handleNewReservation = (date, time) => {
    //update existent reservations with the new reservation
    setReservations((prev) => ({
      ...prev,
      [date]: [...(prev[date] || [], time)],
    }));
  };
  return (
    <>
      <Navbar />
      <div className="reservSection">
        <BookingForm onNewReservation={handleNewReservation} />
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;

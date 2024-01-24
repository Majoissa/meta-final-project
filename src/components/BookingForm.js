import "./Booking.css";
import Button from "./generals/Button";
import TitleText from "./generals/TitleText.js";
import Images from "./generals/Images.js";
import restaurant from "../images/restaurant.jpg";
import { FaWineGlassAlt } from "react-icons/fa";
import { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [availableTime, setAvailableTime] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [selectedTime, setSelectedTime] = useState("");
  const [guest, setGuest] = useState(1);
  const [availableOccasion, setAvailableOccasion] = useState([
    "Birthday",
    "Aniversary",
    "Engagement",
  ]);
  const [selectedOccasion, setSelectedOccasion] = useState("");

  /*To handle the succesfull reserve message"*/
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationData, setConfirmationData] = useState({});

  /*handle functions*/
  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleGuestChange = (event) => {
    setGuest(event.target.value);
  };

  const handleOccasionChange = (event) => {
    setSelectedOccasion(event.target.value);
  };

  /*submit prevent default*/
  const handleSubmit = (event) => {
    event.preventDefault();
    const reserveData = {
      date,
      selectedTime,
      guest,
      selectedOccasion,
    };

    setShowConfirmation(true);
    setConfirmationData(reserveData);

    setDate(new Date().toISOString().split("T")[0]);
    setSelectedTime("");
    setGuest(1);
    setSelectedOccasion("");
  };

  /*Reset function to reload the form*/
  const handleReset = () => {
    setDate(new Date().toISOString().split("T")[0]);
    setSelectedTime("");
    setGuest(1);
    setSelectedOccasion("");

    setShowConfirmation(false);
  };
  return (
    <>
      {!showConfirmation ? (
        <form className="reservationForm" onSubmit={handleSubmit}>
          <label htmlFor="res-date">Choose date</label>
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleChangeDate}
          />
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            value={selectedTime}
            onChange={handleTimeChange}
          >
            {availableTime.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input
            type="number"
            value={guest}
            onChange={handleGuestChange}
            min={1}
            max={10}
            id="guests"
          />
          <label htmlFor="occasion">Occasion</label>
          <div className="select-with-icon">
            <FaWineGlassAlt className="wine" />
            <select
              id="occasion"
              value={selectedOccasion}
              onChange={handleOccasionChange}
            >
              {availableOccasion.map((occasion) => (
                <option key={occasion} value={occasion}>
                  {occasion}
                </option>
              ))}
            </select>
          </div>

          <Button text="Reserve" />
        </form>
      ) : (
        <div className="reservation-confirmation">
          <TitleText text="Reservation confirmed!" color="gold" />
          <h3>See you soon!</h3>
          <p>Date: {confirmationData.date}</p>
          <p>Time: {confirmationData.selectedTime}</p>
          <p>Guests: {confirmationData.guest}</p>
          <p>Occasion: {confirmationData.selectedOccasion}</p>
          <div className="imgbtn">
            <Images direction={restaurant} description="restaurant image" />
            <Button text="Make a new reserve" onClick={handleReset} />
          </div>
        </div>
      )}
    </>
  );
};

export default BookingForm;

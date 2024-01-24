import Navbar from "./Navbar";
import Footer from "./Footer";
import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <>
      <Navbar />
      <div className="reservSection">
        <BookingForm />
      </div>
      <Footer />
    </>
  );
};

export default BookingPage;

import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("allows the user to make a reservation", () => {
  // Renderiza el componente en el entorno de prueba
  render(<BookingForm />);

  // Simula la entrada del usuario
  fireEvent.change(screen.getByLabelText(/Choose date/i), {
    target: { value: "2022-12-24" },
  });
  fireEvent.change(screen.getByLabelText(/Choose time/i), {
    target: { value: "19:00" },
  });
  fireEvent.change(screen.getByLabelText(/Number of guests/i), {
    target: { value: "4" },
  });
  fireEvent.change(screen.getByLabelText(/Occasion/i), {
    target: { value: "Birthday" },
  });

  // Simula la presentación del formulario
  fireEvent.click(screen.getByRole("button", { name: /reserve/i }));

  // Comprueba que se muestra la confirmación
  expect(screen.getByText(/Reservation confirmed!/i)).toBeInTheDocument();
  expect(screen.getByText("See you soon!")).toBeInTheDocument();
});

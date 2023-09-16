import { useState } from "react";
import reminderLogo from "../../assets/images/editedLogo.jpg";
import { Button } from "../Button";
import { Container } from "./styles";
import { NewStickyModal } from "../newStickyModal";

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <img src={reminderLogo} alt="Logo React Reminder" />

      <Button title="" onClick={handleOpenModal} />

      <NewStickyModal isOpen={isModalOpen} onRequestClose={handleCloseModal} />
    </Container>
  );
}

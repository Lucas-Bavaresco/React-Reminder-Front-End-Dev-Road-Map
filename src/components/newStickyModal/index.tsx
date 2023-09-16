import { useContext, useState } from "react";
import { Container } from "./styles";
import { Button } from "../Button";
import Modal from "react-modal";
import NotesContext from "../../hooks/notesContext";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export function NewStickyModal({ isOpen, onRequestClose }: ModalProps) {
  const [stickyName, setStickyName] = useState("");
  const [stickyDescription, setStickyDescription] = useState("");
  const { notes, setNotes } = useContext<any>(NotesContext);
  const [stickyDate, setStickyDate] = useState(""); // Estado para a data
  const [stickyTime, setStickyTime] = useState(""); // Estado para a hora

  const formData = {
    title: stickyName,
    description: stickyDescription,
    date: stickyDate,
    time: stickyTime,
  };

  function handleFormSubmit(event: any) {
    event.preventDefault();
    event.target.reset();
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnEsc
      className="react-modal-content"
      style={{ overlay: { background: "rgba(0,0,0,0.409" } }}
    >
      <Container onSubmit={handleFormSubmit}>
        <h1>Add Schedule</h1>
        <div>
          <input
            type="text"
            placeholder="Title"
            onChange={(event) => setStickyName(event.target.value)}
            required
          />

          <textarea
            placeholder="Description"
            required
            onChange={(event) => {
              setStickyDescription(event.target.value);
            }}
          />
          <div className="dateAndTime">
            <div className="inputWrapper" id="date">
              <input
                type="date"
                value={stickyDate}
                onChange={(event) => setStickyDate(event.target.value)}
                required
              />
            </div>
            <div className="inputWrapper" id="time">
              <input
                type="time"
                value={stickyTime}
                onChange={(event) => setStickyTime(event.target.value)}
                required
              />
            </div>
          </div>
        </div>
        <Button title="" onClick={() => setNotes([...notes, formData])} />
      </Container>
    </Modal>
  );
}

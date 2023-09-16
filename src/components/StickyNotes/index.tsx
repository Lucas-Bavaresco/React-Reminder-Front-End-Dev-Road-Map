import { For } from "million/react";
import { useContext } from "react";
import { Container, Grid } from "./styles";
import NotesContext from "../../hooks/notesContext";

export function StickyNotes() {
  const { notes } = useContext<any>(NotesContext);

  return (
    <Container>
      <div className="reminderTitle">
        <h1>
          Schedule: <span className="notesCount">{notes.length}</span>
        </h1>
      </div>
      <Grid>
        <For each={notes} as="div">
          {(notes: any) => (
            <div key={notes.title}>
              <p id="date">Date: {notes.date}</p>
              <p id="time">Time: {notes.time}</p>
              <h2 id="title">{notes.title}</h2>
              <p id="description">{notes.description}</p>
            </div>
          )}
        </For>
      </Grid>
    </Container>
  );
}

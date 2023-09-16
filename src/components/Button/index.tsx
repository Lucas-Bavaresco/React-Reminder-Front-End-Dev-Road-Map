import { Container } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

interface ButtonProps {
  title: string;
  onClick: () => void;
}

export function Button({ title, onClick }: ButtonProps) {
  return (
    <Container onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} id="icone"/> {title}
    </Container>
  );
}

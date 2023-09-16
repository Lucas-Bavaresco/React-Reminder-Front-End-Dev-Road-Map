
import heroImage from "../../assets/images/HeroDarkMode.png";
import { Container } from "./styles";

export function Hero() {
  return (
    <Container>
      <a href="https://www.brasilcode.com.br/roadmap-para-se-tornar-um-desenvolvedor-frontend/" target="_blank" rel="noopener noreferrer">
        <img 
          src={heroImage}
          alt="Link para o site 'Roadmap Front-End'"
          className="img-hover"
          style={{ width: "100vw", height: "100%"}}
        />
      </a>
    </Container>
  );
} 

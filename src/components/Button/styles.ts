import styled from "styled-components";

export const Container = styled.button`
  height: 3.0rem;
  display: flex;
  padding: 0.7rem 1.5rem;
  background-color: var(--white);
  color: var(--font-black);
  font-weight: bold;
  font-family: "Roboto";
  font-size: 1rem;
  border: 6px double darkblue;
  border-radius: 0.2rem;
  transition: all 0.3s ease-in-out;

> #icone {
  background-color: var(--white);
}

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

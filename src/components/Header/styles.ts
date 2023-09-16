import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 10vh;
  padding: 0 4rem;
  background-color: var(--purple-900);

  > img {
  height: 3.0rem;
  margin: 0 auto; /* Adicione esta linha para centralizar horizontalmente */
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--purple-900);
  }
`;

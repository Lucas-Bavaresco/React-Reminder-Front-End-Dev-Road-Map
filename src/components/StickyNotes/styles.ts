import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto; /* Adicione esta linha para centralizar horizontalmente */
  align-items: center;
  justify-content: center;

  .reminderTitle {
    padding-right: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 3rem 0;

    #date,
    #time {
      position: sticky;
      top: 2; /* Fixa a parte superior no topo da tela */
    }

    > h1 {
      color: var(--purple-900);
      font-family: "Roboto";
      border: 2px solid var(--white);
      padding: 2px 4px;
    }

    .notesCount {
      color: var(--white);
    }
  }
`;

export const Grid = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 1.5rem;
    grid-column-gap: 2.5rem;
    width: 90%;
    margin-bottom: 5rem;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 15rem;
    padding: 1rem;
    gap: 1rem;
    background-color: var(--purple-300);
    border-radius: 0.4rem;
    border: 1px solid var(--white);

    > h2 {
      font-family: "Roboto";
      color: var(--white);
      text-decoration: underline;
      background-color: var(--purple);
      margin-bottom: 20px;
    }

    > p {
      margin-top: -10px;
      font-family: "Roboto";
      width: 90%;
      overflow: auto;
      text-align: center;
      word-break: break-all;
      color: var(--white);
      background-color: var(--purple);

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

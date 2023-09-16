import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40vw;
  height: 80vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--bg-black-color);
  border: 3px solid var(--white);
  border-radius: 8px;

  > div {
    display: flex;
    flex-direction: column;
    width: 70%;
    gap: 1rem;

    .dateAndTime {
      color: var(--white);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }
    .inputWrapper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      flex: 1; /* Isso permite que eles compartilhem o espaço disponível igualmente */
    }

    #date,
    #time {
      color: var(--white);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border: 1px solid #7c7c7c;
      width: 100%;
      border-radius: 0.5rem;
      padding: 0.4rem;
    }

    #date,
    #time > input {
      color: var(--white);
    }

    #date {
         
    }

    input[type="date"],
    input[type="time"] {
      padding: 0 10%;
      text-decoration: underline;
      color: var(--white);
      width: 100%; /* Define a largura dos campos, ajuste conforme necessário */
      margin-right: 4%; /* Adiciona um espaço entre os campos */
    }

    /* Estilize cada campo de entrada (input) dentro de um wrapper */

    /* Altera a cor dos ícones do campo type="date" */
    input[type="date"]::-webkit-calendar-picker-indicator {
      filter: invert(1); /* Inverte as cores dos ícones */
    }

    /* Altera a cor dos ícones do campo type="time" */
    input[type="time"]::-webkit-calendar-picker-indicator {
      filter: invert(1); /* Inverte as cores dos ícones */
    }

    > input {
      height: 2.2rem;
    }

    > input,
    textarea {
      color: var(--white);
      width: 100%;
      border: 1px solid #7c7c7c;
      border-radius: 0.5rem;
      padding: 0.4rem;
    }

    > textarea {
      max-height: 12rem;
      max-width: 100%;
      min-height: 8rem;
      min-width: 100%;
    }
  }

  > h1 {
    color: var(--white);
    font-family: "Roboto";
  }
`;

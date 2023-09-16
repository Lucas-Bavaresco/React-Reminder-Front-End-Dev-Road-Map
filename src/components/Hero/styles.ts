import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  width: 100%;
  height: 20rem;
  border: 1px solid var(--white);
  

  > img {
    width: 100%;
    cursor: pointer;
  }

  .img-hover:hover {
    border: 5px solid var(--white);
  }
`;

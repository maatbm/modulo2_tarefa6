import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  background-color: var(--black-background);

  @media (max-width: 481px) {
    grid-template-columns: 1fr;
    height: 100%;
  }

  @media (min-width: 482px) and (max-width: 769px) {
    grid-template-columns: repeat(2, 1fr);
    height: 100%;
  }

  @media (min-width: 770px) and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 861px) and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

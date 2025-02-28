import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  background-color: var(--black-background-card);
  padding: 20px;
  border-radius: 0.5rem;

  h1{
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

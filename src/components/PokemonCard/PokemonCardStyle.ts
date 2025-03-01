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
  box-shadow: 0px 0px 15px var(--white);
  border: 2px solid var(--white);
  transition: all 0.3s ease-in-out;

  &:hover{
    transform: scale(1.05);
  }

  h1{
    color: var(--white);
    font-size: 1.5rem;
    font-weight: 700;
  }
`;

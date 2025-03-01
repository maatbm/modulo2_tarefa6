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
`;
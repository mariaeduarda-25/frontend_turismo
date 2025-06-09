import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem;
  min-height: calc(100vh - 7.6rem);
  gap: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  h2, h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

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

export const AvaliacaoList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const AvaliacaoItem = styled.li`
  background-color: ${colors.secondary};
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  font-size: 1rem;
`;

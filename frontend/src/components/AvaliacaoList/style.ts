import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const AvaliacaoListContainer = styled.ul`
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

  button {
    margin-right: 0.5rem;
    background: transparent;
    border: none;
    color: ${colors.third};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

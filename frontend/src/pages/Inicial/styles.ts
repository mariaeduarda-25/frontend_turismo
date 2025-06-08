import styled from 'styled-components';
import { colors } from "../../styles/GlobalStyle";

export const Main = styled.main`
  min-height: calc(100vh - 7.6rem);
  padding: 2rem;         // dar espaçamento interno
  width: 100%;           // garantir que ocupa 100% da largura
  box-sizing: border-box; // evitar que o padding quebre o layout
`;

export const Section = styled.section`
  flex: 1 1 30%;
  background-color: ${colors.secondary};
  border: 0.2rem solid ${colors.secondary};
  border-radius: 0.5rem;
  margin: 2rem auto 0;
  max-width: 800px;

  p {
    line-height: 1.8;
    margin-bottom: 1rem;
  }
`;

export const Fotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 1rem;
  margin-top: 4rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
  }
`;

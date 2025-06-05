import styled from 'styled-components';

export const Main = styled.main`
  min-height: calc(100vh - 7.6rem);
  margin: 0 auto;
`;

export const Section = styled.section`
  flex: 1 1 30%;
  background-color: var(--secondary);
  border: 0.2rem solid var(--secondary);
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

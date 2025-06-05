import styled from "styled-components";

export const Container = styled.main`
  min-height: calc(100vh - 7.6rem);
  margin: 0 auto;
  padding: 2rem;
`;

export const Section = styled.section`
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
  align-items: stretch;
`;

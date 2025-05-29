// src/components/Card/styles.ts
import styled from "styled-components";

export const SCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  background-color: white;
  box-shadow: 0 0 10px black;
  width: 100%;
  max-width: 100%;
  min-height: 580px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 1rem;
  }

  h3 {
    text-align: center;
    margin-top: 1rem;
    min-height: 60px;
  }

  p {
    line-height: 1.6;
    border: 2px solid black;
    border-radius: 1rem;
    padding: 1rem;
    margin-top: 1rem;
    text-align: center;
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

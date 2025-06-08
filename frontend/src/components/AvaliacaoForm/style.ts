import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SForm = styled.form`
  background-color: ${colors.secondary};
  padding: 3rem 2rem;
  border: 1px solid black;
  border-radius: 15px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  margin: 2rem auto;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  .input-group {
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 15px;
    padding: 0.5rem;
    margin: 1rem 0;
    gap: 0.5rem;

    input,
    textarea {
      border: none;
      outline: none;
      background: transparent;
      font-size: 1rem;
      flex: 1;
      width: 100%;
      resize: none;
    }
  }

  button {
    background: #e4a7f8; 
    color: black;
    font-weight: bold;
    padding: 0.6rem 1.5rem;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background: #d68ce9;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

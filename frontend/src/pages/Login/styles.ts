import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const Container = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem;
  min-height: calc(100vh - 7.6rem);
  margin: 0 auto;
  padding: 2rem;
`;

export const FormSection = styled.form`
  background-color: ${colors.secondary};
  padding: 2rem;
  border: 1px solid black;
  border-radius: 15px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  background-color: ${colors.secondary};

  img {
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
  background: transparent;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;

  a {
    text-decoration: none;
  }
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${colors.primary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-bottom: 1rem;
`;

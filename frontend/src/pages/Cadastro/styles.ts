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

export const Section = styled.section`
  background-color: ${colors.secondary};
  padding: 3rem 2rem;
  border: 1px solid black;
  border-radius: 15px;
  width: 90%;
  max-width: 600px;
  height: auto;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  border-radius: 15px;
  padding: 0.5rem;
  margin: 1rem 0;
  gap: 0.5rem;
   img {
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  background: transparent;
  font-size: 1rem;
`;

export const TextArea = styled.textarea`
  border: none;
  outline: none;
  flex: 1;
  background: transparent;
  font-size: 1rem;
  width: 100%;
  resize: none;
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

export const Button = styled.button`
  background-color: ${colors.primary};
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
  cursor: pointer;
`;

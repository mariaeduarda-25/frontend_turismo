import styled from "styled-components";

export const Container = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem;
`;

export const Section = styled.section`
  background: var(--secondary);
  padding: 3rem 2rem;
  border: 1px solid black;
  border-radius: 15px;
  width: 90%;
  max-width: 600px;
  height: auto;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 1rem;
  }
`;

export const InputGroup = styled.div`
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
    flex: 1;
    background: transparent;
    font-size: 1rem;
    width: 100%;
    resize: none;
  }
`;

export const Button = styled.button`
  background: var(--primary);
  border: none;
  padding: 0.7rem 2rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 1rem;
  transition: 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`;

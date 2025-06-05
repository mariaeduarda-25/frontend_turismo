import styled from "styled-components"

export const Container = styled.main`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem;
`

export const Section = styled.form`
  background: var(--secondary);
  padding: 3rem 2rem;
  border: 1px solid black;
  border-radius: 15px;
  width: 90%;
  max-width: 600px;
  text-align: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
`

export const Title = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 2rem;
`

export const FormGroup = styled.div`
  margin: 1rem 0;
`

export const IconInput = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid black;
  border-radius: 15px;
  padding: 0.5rem;
`

export const Input = styled.input`
  border: none;
  outline: none;
  flex: 1;
  background: transparent;
  font-size: 1rem;
`

export const Button = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  border-radius: 20px;
  cursor: pointer;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

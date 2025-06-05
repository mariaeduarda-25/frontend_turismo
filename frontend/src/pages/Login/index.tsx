import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

import {
  Container,
  FormSection,
  Title,
  InputGroup,
  Input,
  ButtonGroup,
  Button,
  ErrorMessage
} from "./styles";

import senha from "../../assets/senha.svg";
import emailIcon from "../../assets/email.svg"; 
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) return;

    setIsLoading(true);
    setError("");

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha no login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <Container>
        <FormSection onSubmit={handleSubmit}>
          <Title>LOGIN</Title>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <InputGroup>
            <img src={emailIcon} alt="Ícone e-mail" />
            <Input
              type="email"
              placeholder="Email:"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </InputGroup>

          <InputGroup>
            <img src={senha} alt="Ícone chave" />
            <Input
              type="password"
              placeholder="Senha:"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </InputGroup>

          <ButtonGroup>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>
            <Link to="/register">
              <Button type="button">Cadastrar</Button>
            </Link>
          </ButtonGroup>
        </FormSection>
      </Container>

      <Footer />
    </>
  );
}

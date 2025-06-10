import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import senha from "../../assets/senha.svg";
import emailIcon from "../../assets/email.svg"; 
import {
  Container,
  Section,
  InputGroup,
  Input,
  Button,
} from "./styles"; 

export const CadastrePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { cadastro} = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) return;

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await cadastro(name, email, password);
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao registrar");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <Container>
        <Section>
          <h2>CADASTRE-SE</h2>

          {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Input
                type="text"
                placeholder="Nome Completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
            <img src={emailIcon} alt="Ícone e-mail" />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <img src={senha} alt="Ícone chave" />
              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </InputGroup>

            <InputGroup>
              <img src={senha} alt="Ícone chave" />
              <Input
                type="password"
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </InputGroup>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Cadastrando..." : "Cadastrar"}
            </Button>

            <p style={{ marginTop: "1rem" }}>
              Já tem uma conta? <Link to="/login">Fazer login</Link>
            </p>
          </form>
        </Section>
      </Container>

      <Footer />
    </>
  );
};

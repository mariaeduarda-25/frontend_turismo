import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, Section, InputGroup, Button } from "./styles";

export function Avaliacoes() {
  return (
    <>
      <Header />

      <Container>
        <Section>
          <h2>Escreva uma Avaliação</h2>

          <InputGroup>
            <input type="text" placeholder="Nome Completo:" required />
          </InputGroup>

          <InputGroup>
            <textarea
              placeholder="Comentário:"
              required
              minLength={20}
              maxLength={200}
              rows={5}
            />
          </InputGroup>

          <Button>Enviar</Button>
        </Section>
      </Container>

      <Footer />
    </>
  );
}

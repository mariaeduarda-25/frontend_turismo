import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import campos from "../../assets/img/campos 1.svg";
import noronha from "../../assets/img/fernando de noronha.svg";
import gramado from "../../assets/img/gramado 1.svg";
import { Main, Section, Fotos } from "./styles";

export function InitialPage() {
  return (
    <>
      <Header />

      <Main id="index">
        <Section>
          <p>
            Aqui reunimos as melhores dicas de hospedagens e passeios para tornar sua viagem inesquecível!!!
          </p>
          <p>
            De pousadas charmosas a hotéis incríveis, de trilhas secretas a passeios imperdíveis, mostramos o que realmente vale a pena conhecer.
          </p>
          <p>
            Planeje com leveza, viaje com confiança e descubra o mundo com a gente!
          </p>
        </Section>

        <Fotos>
          <img src={campos} alt="Campos de Jordão" />
          <img src={noronha} alt="Fernando de Noronha" />
          <img src={gramado} alt="Gramado" />
        </Fotos>
      </Main>

      <Footer />
    </>
  );
}

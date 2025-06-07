import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Container, Section } from "./styles";

import teleferico from "../../assets/teleferico-campos-jordao.svg";
import naufragio from "../../assets/passeio-fernandodenoronha.svg";
import canion from "../../assets/tour-canion.svg";

export function Passeios() {
  const passeios = [
    {
      image: teleferico,
      alt: "Teleférico Campos do Jordão",
      title: "Passeio Teleférico - Campos do Jordão",
      description:
        "Não tem como visitar Campos do Jordão e não dar uma volta no Teleférico. É o passeio perfeito para desfrutar com a família e os amigos, incluindo até os pets que podem ir na cabine. Durante a viagem, você será presenteado com vistas deslumbrantes da Serra da Mantiqueira.",
    },
    {
      image: naufragio,
      alt: "Passeio Fernando de Noronha",
      title: "Naufrágio Eleni Stathatos - Fernando de Noronha",
      description:
        "Uma das atividades de mergulho em Fernando de Noronha é conhecer o naufrágio de Eleni Stathatos. Trata-se de um navio grego que afundou próximo ao Porto de Santo Antônio em 1929. Devido à rasa profundidade e água clara, é possível observar toda a estrutura do navio, que se tornou um verdadeiro ponto turístico.",
    },
    {
      image: canion,
      alt: "Tour Cânion Itaimbezinho",
      title: "Tour Cânion Itaimbezinho - Gramado",
      description:
        "Com duração aproximada de 9 horas, o passeio leva os visitantes ao maior cânion da América Latina, localizado no Parque Nacional dos Aparados da Serra, em Cambará do Sul. A paisagem é das mais espetaculares.",
    },
  ];

  return (
    <>
      <Header />

      <Container>
        <Section>
          {passeios.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              alt={item.alt}
              title={item.title}
              description={item.description}
            />
          ))}
        </Section>
      </Container>

      <Footer />
    </>
  );
}

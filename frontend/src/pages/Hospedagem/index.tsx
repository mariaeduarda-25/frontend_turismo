import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Container, Section } from "./styles";

import chateau from "../../assets/chateau-la-villette 1.svg";
import nanai from "../../assets/pousada-nanai.svg";
import colline from "../../assets/hotel-colline-de-france 1.svg";

export function Hospedagem() {
  const hospedagens = [
    {
      image: chateau,
      alt: "Hotel Chateau La Villette",
      title: "Hotel Chateau La Villette - Campos do Jordão",
      description:
        "Está localizado em uma das áreas mais charmosas e tranquilas da cidade, rodeado por natureza, com uma vista privilegiada de montanhas e bem próximo ao centro Capivari. Com arquitetura inspirada nos clássicos chalés europeus, o ambiente é romântico e sofisticado. Os jardins bem cuidados, os espaços comuns aconchegantes e o atendimento atencioso tornam a estadia ainda mais especial.",
    },
    {
      image: nanai,
      alt: "Pousada Nanai",
      title: "Pousada Nanai - Fernando de Noronha",
      description:
        "A pousada oferece conforto, charme e exclusividade em meio à natureza de Fernando de Noronha. Com bangalôs elegantes, serviço atencioso e localização privilegiada perto das principais praias, é ideal para quem busca uma experiência única e inesquecível na ilha.",
    },
    {
      image: colline,
      alt: "Hotel Colline de France",
      title: "Hotel Colline de France - Gramado",
      description:
        "O hotel é um dos mais elegantes do Brasil. Inspirado na arquitetura clássica francesa, oferece uma experiência charmosa e detalhista, com suítes confortáveis, ricas em estilo e bom gosto. O café da manhã é artesanal e a localização é tranquila. Ideal para casais e momentos especiais na Serra Gaúcha.",
    },
  ];

  return (
    <>
      <Header />

      <Container>
        <Section>
          {hospedagens.map((item, index) => (
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

import { render, screen } from "@testing-library/react";
import { Card } from "../../components/Card";
describe("Card", () => {
  it("deve exibir a imagem, o título e a descrição", () => {
    render(
      <Card
        image = "Minha imagem" 
        alt = "Imagem"
        title= "Meu título"
        description="Minha Descrição"
      />
    );
    expect(screen.getByText("Meu título")).toBeInTheDocument();
    expect(screen.getByText("Minha Descrição")).toBeInTheDocument();

  });
});
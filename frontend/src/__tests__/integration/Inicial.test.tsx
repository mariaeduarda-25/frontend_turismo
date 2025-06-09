import { render, screen } from "@testing-library/react";
import { InitialPage } from "../../pages/Inicial";
import { vi } from "vitest";

// Mock dos componentes usados
vi.mock("../../components/Header", () => ({
  Header: () => <div data-testid="mock-header" />,
}));

vi.mock("../../components/Footer", () => ({
  Footer: () => <div data-testid="mock-footer" />,
}));

describe("Página Inicial", () => {
  it("deve renderizar os textos principais e imagens corretamente", () => {
    render(<InitialPage />);

    // Verifica os parágrafos
    expect(
      screen.getByText(/Aqui reunimos as melhores dicas de hospedagens/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/De pousadas charmosas a hotéis incríveis/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Planeje com leveza, viaje com confiança/i)
    ).toBeInTheDocument();

    // Verifica as imagens pelos alt texts
    expect(screen.getByAltText("Campos de Jordão")).toBeInTheDocument();
    expect(screen.getByAltText("Fernando de Noronha")).toBeInTheDocument();
    expect(screen.getByAltText("Gramado")).toBeInTheDocument();

    // Verifica os mocks do Header e Footer
    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });
});

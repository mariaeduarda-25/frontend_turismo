import { render, screen } from "@testing-library/react";
import { Passeios } from "../../pages/Passeio";
import { vi } from "vitest";

// Mock dos componentes usados
vi.mock("../../components/Header", () => ({
  Header: () => <div data-testid="mock-header" />,
}));
vi.mock("../../components/Footer", () => ({
  Footer: () => <div data-testid="mock-footer" />,
}));
vi.mock("../../components/Card", () => ({
  Card: ({ title }: { title: string }) => <div>{title}</div>,
}));

describe("Página Passeios", () => {
  it("deve renderizar os cards de passeios corretamente", () => {
    render(<Passeios />);

    // Verifica se os títulos dos passeios estão presentes
    expect(
      screen.getByText("Passeio Teleférico - Campos do Jordão")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Naufrágio Eleni Stathatos - Fernando de Noronha")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Tour Cânion Itaimbezinho - Gramado")
    ).toBeInTheDocument();

    // Verifica se Header e Footer foram renderizados
    expect(screen.getByTestId("mock-header")).toBeInTheDocument();
    expect(screen.getByTestId("mock-footer")).toBeInTheDocument();
  });
});


import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "../../App";
import { describe, it, expect } from "vitest";

describe("Rota /hospedagens", () => {
  it("deve exibir todos os cards de hospedagens", async () => {
    render(
      <MemoryRouter initialEntries={["/hospedagens"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      await screen.findByText(/Hotel Chateau La Villette/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Pousada Nanai - Fernando de Noronha/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Hotel Colline de France - Gramado/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Está localizado em uma das áreas mais charmosas/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/A pousada oferece conforto, charme e exclusividade/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/O hotel é um dos mais elegantes do Brasil/i)
    ).toBeInTheDocument();
  });
});

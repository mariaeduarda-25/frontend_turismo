import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../contexts/AuthContext";
import { CadastrePage } from "../../pages/Cadastro";

describe("Página de Cadastro", () => {
  it("realiza cadastro com sucesso", async () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <CadastrePage/>
        </MemoryRouter>
      </AuthProvider>
    );

    fireEvent.change(screen.getByPlaceholderText("Nome Completo"), {
      target: { value: "João Teste" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "joao@teste.com" },
    });
    fireEvent.change(screen.getAllByPlaceholderText("Senha")[0], {
      target: { value: "senha123" },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirmar Senha"), {
      target: { value: "senha123" },
    });

    fireEvent.click(screen.getByRole("button", { name: /cadastrar/i }));

    await waitFor(() => {
      expect(screen.queryByText(/As senhas não coincidem/i)).not.toBeInTheDocument();
    });

    // Se quiser verificar redirecionamento ou sucesso, você pode mockar o `navigate` e conferir se ele foi chamado
  });

  it("exibe erro quando senhas são diferentes", async () => {
    render(
      <AuthProvider>
        <MemoryRouter>
          <CadastrePage />
        </MemoryRouter>
      </AuthProvider>
    );

    fireEvent.change(screen.getByPlaceholderText("Nome Completo"), {
      target: { value: "Maria" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: "maria@teste.com" },
    });
    fireEvent.change(screen.getAllByPlaceholderText("Senha")[0], {
      target: { value: "123456" },
    });
    fireEvent.change(screen.getByPlaceholderText("Confirmar Senha"), {
      target: { value: "654321" },
    });

    fireEvent.click(screen.getByRole("button", { name: /cadastrar/i }));

    await waitFor(() => {
      expect(screen.getByText(/As senhas não coincidem/i)).toBeInTheDocument();
    });
  });
});

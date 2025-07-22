import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { CommentContext } from "../../contexts/CommentContext";
import { mockUsers } from "../../mocks/UserMock";
import { mockComments } from "../../mocks/CommentMock";
import { Avaliacoes } from "../../pages/Avaliacoes";

// Função utilitária para renderizar com provedores
const renderWithProviders = (user = mockUsers[0], comments = [...mockComments]) => {
  // Converte os mocks para o tipo correto (removendo campos extras)
  const convertedComments = comments.map(({ post_id, user_id, comment }) => ({
    post_id,
    user_id,
    comment,
  }));

  return render(
    <AuthContext.Provider
      value={{
        currentUser: user,
        isLoading: false,
        login: vi.fn(),
        register: vi.fn(),
        logout: vi.fn(),
      }}
    >
      <CommentContext.Provider
        value={{
          comments: convertedComments,
          addComment: vi.fn(async (comment) => {
            convertedComments.push(comment); // Simula a adição
          }),
        }}
      >
        <MemoryRouter initialEntries={["/avaliacoes"]}>
          <Routes>
            <Route path="/avaliacoes" element={<Avaliacoes />} />
            <Route path="/login" element={<div>Página de Login</div>} />
          </Routes>
        </MemoryRouter>
      </CommentContext.Provider>
    </AuthContext.Provider>
  );
};

// Exemplo de teste
describe("Página de Avaliações", () => {
  it("deve exibir comentário após envio", async () => {
    renderWithProviders();

    const botaoEnviar = screen.getByRole("button", { name: /enviar/i });

    // Simula o clique no botão
    await userEvent.click(botaoEnviar);

    // Espera comentário aparecer
    await waitFor(() => {
      expect(screen.getByText(/Ana/i)).toBeInTheDocument();
    });

    // Outro expect, se necessário
    expect(
      screen.getByText(/O hotel Hotel Chateau La Villette/i)
    ).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { AvaliacaoList } from "../../components/AvaliacaoList";
import { vi } from "vitest";
import { mockComments } from "../../mocks/CommentMock";

describe("AvaliacaoList", () => {
  const getUserNameById = (id: string) => {
    switch (id) {
      case "user-1":
        return "Usuário 1";
      case "user-2":
        return "Usuário 2";
      case "user-3":
        return "Usuário 3";
      default:
        return "Desconhecido";
    }
  };

  const mockOnDelete = vi.fn();
  const mockOnEdit = vi.fn();

  it("deve exibir os comentários com autor e data", () => {
    render(
      <AvaliacaoList
        comentarios={mockComments}
        getUserNameById={getUserNameById}
        currentUserId="user-1"
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );

    expect(
      screen.getByText(/Hotel Chateau La Villette/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/teleférico em Campos de Jordão/i)
    ).toBeInTheDocument();

    expect(screen.getByText("30/05/2025")).toBeInTheDocument();
    expect(screen.getByText("22/05/2025")).toBeInTheDocument();

    expect(screen.getByText("Usuário 1")).toBeInTheDocument();
    expect(screen.getByText("Usuário 2")).toBeInTheDocument();
  });

  it("não deve exibir botões de editar/excluir se o usuário não for o autor", () => {
    const comentariosDeOutrosUsuarios = [
      {
        id: "comment-2",
        post_id: "post-1",
        user_id: "user-2",
        comment:
          "O passeio de teleférico em Campos de Jordão é sensacional, vale muito a pena!",
        data: "22/05/2025",
      },
      {
        id: "comment-3",
        post_id: "post-1",
        user_id: "user-3",
        comment: "Excelente gastronomia na cidade.",
        data: "21/05/2025",
      },
    ];

    render(
      <AvaliacaoList
        comentarios={comentariosDeOutrosUsuarios}
        getUserNameById={getUserNameById}
        currentUserId="user-1"
        onDelete={mockOnDelete}
        onEdit={mockOnEdit}
      />
    );

    expect(
      screen.queryByRole("button", { name: /editar/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /excluir/i })
    ).not.toBeInTheDocument();
  });
});

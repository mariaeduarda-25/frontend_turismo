import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { AvaliacaoForm } from "../../components/AvaliacaoForm";
import { vi } from "vitest";

vi.mock("../../hooks/useComment", () => ({
  useComment: () => ({
    addComment: vi.fn().mockResolvedValue(undefined),
  }),
}));

vi.mock("../../hooks/useAuth", () => ({
  useAuth: () => ({
    currentUser: {
      id: "user-1",
      name: "Ana",
    },
  }),
}));

describe("AvaliacaoForm", () => {
  it("deve enviar o formulário com nome e comentário válidos", async () => {
    const onSubmitMock = vi.fn();
    const user = userEvent.setup();

    render(<AvaliacaoForm postId="post-1" onSubmit={onSubmitMock} />);


    const nameInput = screen.getByPlaceholderText(/nome completo:/i);
    const commentInput = screen.getByPlaceholderText(/comentário:/i);
    const submitButton = screen.getByRole("button", { name: /enviar/i });


    await user.type(nameInput, "Ana");
    await user.type(commentInput, "Este é um comentário de teste válido.");


    await user.click(submitButton);


    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({
        comment: "Este é um comentário de teste válido.",
      });
    });
  });

  it("não deve enviar se campos estiverem vazios", async () => {
    const onSubmitMock = vi.fn();
    const user = userEvent.setup();

    render(<AvaliacaoForm postId="post-1" onSubmit={onSubmitMock} />);

    const submitButton = screen.getByRole("button", { name: /enviar/i });

    await user.click(submitButton);

    expect(onSubmitMock).not.toHaveBeenCalled();
  });
});

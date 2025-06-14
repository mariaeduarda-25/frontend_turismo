import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { AvaliacaoForm } from "../../components/AvaliacaoForm";
import { mockComments } from "../../mocks/CommentMock";
import { mockUsers } from "../../mocks/UserMock";
import type { CommentProps } from "../../types/CommentType";
import { useAuth } from "../../contexts/AuthContext";
import { AvaliacaoList } from "../../components/AvaliacaoList"; // Novo import

export function Avaliacoes() {
  const { currentUser } = useAuth();
  const postId = "post-1";

  const [avaliacoes, setAvaliacoes] = useState<CommentProps[]>(
    mockComments.filter((comment) => comment.postId === postId)
  );

  const getUserNameById = (userId: string) => {
    const user = mockUsers.find((u) => u.id === userId);
    return user ? user.name : "Usuário Desconhecido";
  };

  const handleSubmit = (data: { comment: string }) => {
    if (!currentUser) return;

    const novaAvaliacao: CommentProps = {
      id: `comment-${Date.now()}`,
      postId,
      userId: currentUser.id,
      comment: data.comment,
      data: new Date().toLocaleDateString("pt-BR"),
    };
    setAvaliacoes([...avaliacoes, novaAvaliacao]);
  };

  const handleDelete = (id: string) => {
    setAvaliacoes(avaliacoes.filter((a) => a.id !== id));
  };

  const handleEdit = (id: string) => {
    const comentario = avaliacoes.find((a) => a.id === id);
    if (!comentario) return;

    const novoComentario = prompt("Edite seu comentário:", comentario.comment);
    if (novoComentario !== null && novoComentario.trim() !== "") {
      setAvaliacoes(
        avaliacoes.map((a) =>
          a.id === id ? { ...a, comment: novoComentario } : a
        )
      );
    }
  };

  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Header />
      <Container>
        <div style={{ flex: 1 }}>
          <h2>Avaliações</h2>
          {avaliacoes.length === 0 ? (
            <p>Nenhuma avaliação cadastrada ainda.</p>
          ) : (
            <AvaliacaoList
              comentarios={avaliacoes}
              getUserNameById={getUserNameById}
              currentUserId={currentUser.id}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          )}
        </div>

        <div style={{ flex: 1 }}>
          <AvaliacaoForm postId={postId} onSubmit={handleSubmit} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

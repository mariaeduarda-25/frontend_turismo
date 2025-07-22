import { useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { AvaliacaoForm } from "../../components/AvaliacaoForm";
import type { CommentProps } from "../../types/CommentType";
import { useAuth } from "../../contexts/AuthContext";
import { AvaliacaoList } from "../../components/AvaliacaoList";

export function Avaliacoes() {
  const { currentUser } = useAuth();
  const post_id = "post-1";

  const [avaliacoes, setAvaliacoes] = useState<CommentProps[]>([]);

  const getUserNameById = (userId: string) => {
    if (currentUser && currentUser.id === userId) {
      return currentUser.name;
    }
    return "Usuário Desconhecido";
  };

  const handleSubmit = (data: { comment: string }) => {
    if (!currentUser) return;

    const novaAvaliacao: CommentProps = {
      id: `comment-${Date.now()}`,
      post_id,
      user_id: currentUser.id,
      comment: data.comment,
      date: new Date().toLocaleDateString("pt-BR"),
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
          <AvaliacaoForm post_id={post_id} onSubmit={handleSubmit} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

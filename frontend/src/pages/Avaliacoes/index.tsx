import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { AvaliacaoForm } from "../../components/AvaliacaoForm";
import { useAuth } from "../../contexts/AuthContext";
import { AvaliacaoList } from "../../components/AvaliacaoList";

import commentService from "../../services/api/comments";
import type { IComment } from "../../services/api/comments";

import type { CommentProps } from "../../types/CommentType";

export function Avaliacoes() {
  const { currentUser } = useAuth();
  const post_id = "post-1";

  const [avaliacoes, setAvaliacoes] = useState<CommentProps[]>([]);

  useEffect(() => {
    async function fetchAvaliacoes() {
      try {
        const res = await commentService.getByPost(post_id);
        setAvaliacoes(res.data);
      } catch (err) {
        console.error("Erro ao buscar avaliações", err);
      }
    }
    fetchAvaliacoes();
  }, [post_id]);

  const getUserNameById = (userId: string) => {
    // ajuste para buscar do backend se necessário
    if (currentUser && currentUser.id === userId) {
      return currentUser.name;
    }
    return "Usuário Desconhecido";
  };

  const handleSubmit = async (data: { comment: string }) => {
    if (!currentUser) return;

    const novaAvaliacao: IComment = {
      post_id,
      comment: data.comment,
      date: new Date().toISOString(), // ou backend gera a data
    };

    try {
      await commentService.create(novaAvaliacao);
      const res = await commentService.getByPost(post_id);
      setAvaliacoes(res.data);
    } catch (err) {
      console.error("Erro ao criar avaliação", err);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await commentService.delete(id);
      setAvaliacoes(avaliacoes.filter((a) => a.id !== id));
    } catch (err) {
      console.error("Erro ao excluir avaliação", err);
    }
  };

  const handleEdit = async (id: string) => {
    const comentario = avaliacoes.find((a) => a.id === id);
    if (!comentario) return;
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

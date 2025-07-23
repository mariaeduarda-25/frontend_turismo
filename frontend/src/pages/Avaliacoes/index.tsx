import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container } from "./styles";
import { AvaliacaoForm } from "../../components/AvaliacaoForm";
import { AvaliacaoList } from "../../components/AvaliacaoList";
import { useAuth } from "../../contexts/AuthContext";
import type { CommentProps } from "../../types/CommentType";
import type { UserProps } from "../../types/UserType";
import { api } from "../../services/http/axios"; 


export function Avaliacoes() {
  const { currentUser } = useAuth();
  const post_id = "post-1";

  const [avaliacoes, setAvaliacoes] = useState<CommentProps[]>([]);
  const [usuarios, setUsuarios] = useState<UserProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const [commentsRes, usersRes] = await Promise.all([
          api.get(`/comments`, { params: { post_id } }),
          api.get(`/users`),
        ]);
        setAvaliacoes(commentsRes.data);
        setUsuarios(usersRes.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData();
  }, []);

  const getUserNameById = (user_id: string) => {
    const user = usuarios.find((u) => u.id === user_id);
    if (user) return user.name;

    if (currentUser && currentUser.id === user_id) {
      return currentUser.name;
    }

    return "Usuário Desconhecido";
  };

  const handleAdd = (newComment: CommentProps) => {
    setAvaliacoes((prev) => [...prev, newComment]);
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/comments/${id}`);
      setAvaliacoes((prev) => prev.filter((a) => a.id !== id));
    } catch (error) {
      console.error("Erro ao excluir comentário:", error);
    }
  };

  const handleEdit = async (id: string) => {
    const comentario = avaliacoes.find((a) => a.id === id);
    if (!comentario) return;

    const novoComentario = prompt("Edite seu comentário:", comentario.comment);
    if (novoComentario && novoComentario.trim() !== "") {
      try {
        const response = await api.put(`/comments/${id}`, {
          comment: novoComentario,
        });
        setAvaliacoes((prev) =>
          prev.map((a) => (a.id === id ? response.data : a))
        );
      } catch (error) {
        console.error("Erro ao editar comentário:", error);
      }
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
          <AvaliacaoForm post_id={post_id} onAdd={handleAdd} />
        </div>
      </Container>
      <Footer />
    </>
  );
}

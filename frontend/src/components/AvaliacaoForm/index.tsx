import { useState, type FormEvent } from "react";
import { SForm } from "../AvaliacaoForm/style";
import { useComment } from "../../hooks/useComment";
import { useAuth } from "../../hooks/useAuth";

interface AvaliacaoFormProps {
  post_id: string;
}

export function AvaliacaoForm({ post_id }: AvaliacaoFormProps) {
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const { addComment } = useComment();
  const { currentUser } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!currentUser || !comment.trim() || !name.trim()) return;

    setIsLoading(true);
    try {
      await addComment({
        post_id,
        user_id: currentUser.id,
        comment: comment.trim(),
      });
      setComment("");
      setName("");
      // A chamada de onSubmit foi removida pois agora o contexto gerencia o estado global
    } catch (error) {
      console.error("Falha ao adicionar o comentário:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <SForm onSubmit={handleSubmit}>
      <h2>Escreva uma Avaliação</h2>
      <div className="input-group">
        <input
          type="text"
          placeholder="Nome completo:"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <textarea
          placeholder="Comentário:"
          required
          minLength={20}
          maxLength={200}
          rows={5}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Enviando..." : "Enviar"}
      </button>
    </SForm>
  );
}

import type { CommentProps } from "../../types/CommentType";
import { AvaliacaoItem, AvaliacaoListContainer } from "./style";

type AvaliacaoListProps = {
  comentarios: CommentProps[];
  getUserNameById: (userId: string) => string;
  currentUserId: string;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
};

export function AvaliacaoList({
  comentarios,
  getUserNameById,
  currentUserId,
  onDelete,
  onEdit,
}: AvaliacaoListProps) {
  return (
    <AvaliacaoListContainer>
      {comentarios.map((comentario) => (
        <AvaliacaoItem key={comentario.id}>
          <strong>{comentario.data}</strong> —{" "}
          <em>{getUserNameById(comentario.userId)}</em>: {comentario.comment}

          {comentario.userId === currentUserId && (
            <div style={{ marginTop: "0.5rem" }}>
              <button onClick={() => onEdit(comentario.id)}>Editar</button>
              <button onClick={() => onDelete(comentario.id)}>Excluir</button>
            </div>
          )}
        </AvaliacaoItem>
      ))}
    </AvaliacaoListContainer>
  );
}

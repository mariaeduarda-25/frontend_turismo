import { useContext, useEffect } from "react"
import type { CommentProps } from "../../types/CommentType"
import { CommentContext } from "../../contexts/CommentContext"
import { AvaliacaoItem, AvaliacaoListContainer } from "./style"

type AvaliacaoListProps = {
  post_id: string
  getUserNameById: (user_id: string) => string
  currentUserId: string
  onDelete: (id: string) => void
}

export function AvaliacaoList({
  post_id,
  getUserNameById,
  currentUserId,
  onDelete,
}: AvaliacaoListProps) {
  const { comments, getCommentsByPost, isLoading } = useContext(CommentContext)

  useEffect(() => {
    if (post_id) {
      getCommentsByPost(post_id)
    }
  }, [post_id])

  return (
    <AvaliacaoListContainer>
      {isLoading ? (
        <p>Carregando comentários...</p>
      ) : comments.length === 0 ? (
        <p>Não há comentários ainda.</p>
      ) : (
        comments.map((comentario: CommentProps) => (
          <AvaliacaoItem key={comentario.id}>
            <strong>{comentario.date}</strong> —{" "}
            <em>{getUserNameById(comentario.user_id)}</em>: {comentario.comment}

            {comentario.user_id === currentUserId && (
              <div style={{ marginTop: "0.5rem" }}>
                <button onClick={() => (comentario.id)}>Editar</button>
                <button onClick={() => onDelete(comentario.id)}>Excluir</button>
              </div>
            )}
          </AvaliacaoItem>
        ))
      )}
    </AvaliacaoListContainer>
  )
}

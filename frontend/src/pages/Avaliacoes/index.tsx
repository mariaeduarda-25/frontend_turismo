import { useEffect, useState, useContext } from "react"
import { Navigate } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Container } from "./styles"
import { AvaliacaoForm } from "../../components/AvaliacaoForm"
import { AvaliacaoList } from "../../components/AvaliacaoList"
import { useAuth } from "../../contexts/AuthContext"
import { CommentContext } from "../../contexts/CommentContext"
import type { UserProps } from "../../types/UserType"
import { api } from "../../services/http/axios"

export function Avaliacoes() {
  const { currentUser } = useAuth()
  const { deleteComment } = useContext(CommentContext)
  const post_id = "post-1"

  const [usuarios, setUsuarios] = useState<UserProps[]>([])

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await api.get("/users")
        setUsuarios(res.data)
      } catch (error) {
        console.error("Erro ao buscar usuários:", error)
      }
    }

    fetchUsers()
  }, [])

  const getUserNameById = (user_id: string) => {
    const user = usuarios.find((u) => u.id === user_id)
    return user ? user.name : "Usuário Desconhecido"
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteComment(id)
    } catch (error) {
      console.error("Erro ao excluir comentário:", error)
    }
  }

  if (!currentUser) {
    return <Navigate to="/login" replace />
  }

  return (
    <>
      <Header />
      <Container>
        <div style={{ flex: 1 }}>
          <h2>Avaliações</h2>
          <AvaliacaoList
            post_id={post_id}
            currentUserId={currentUser.id}
            getUserNameById={getUserNameById}
            onDelete={handleDelete}
          />
        </div>

        <div style={{ flex: 1 }}>
          <AvaliacaoForm post_id={post_id} />
        </div>
      </Container>
      <Footer />
    </>
  )
}

"use client"

import { createContext, useState, useEffect, type ReactNode } from "react"
import type { CommentProps } from "../types/CommentType"
import { apiComment } from "../services"

interface CommentContextType {
  comments: CommentProps[]
  isLoading: boolean
  getCommentsByPost: (post_id: string) => Promise<CommentProps[]>
  getCommentsByUser: () => Promise<CommentProps[]>
  addComment: (comment: Omit<CommentProps, "id" | "date">) => Promise<CommentProps>
  deleteComment: (id: string) => Promise<void>
}

export const CommentContext = createContext<CommentContextType>({
  comments: [],
  isLoading: true,
  getCommentsByPost: async () => [],
  getCommentsByUser: async () => [],
  addComment: async () => ({ id: "", post_id: "", user_id: "", comment: "", date: `${new Date()}` }),
  deleteComment: async () => {},
})

interface CommentProviderProps {
  children: ReactNode
}

export const CommentProvider = ({ children }: CommentProviderProps) => {
  const [comments, setComments] = useState<CommentProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Se quiser, pode buscar comentários iniciais aqui,
    // ou deixar para os componentes chamarem getCommentsByPost/post_id
    setIsLoading(false)
  }, [])

  const getCommentsByPost = async (post_id: string) => {
    try {
      setIsLoading(true)
      const response = await apiComment.getByPost(post_id)
      setComments(response.data) // Atualiza o estado global
      return response.data
    } catch (error) {
      console.error(error)
      return []
    } finally {
      setIsLoading(false)
    }
  }

  const getCommentsByUser = async () => {
    try {
      setIsLoading(true)
      const response = await apiComment.getByUser()
      return response.data
    } catch (error) {
      console.error(error)
      return []
    } finally {
      setIsLoading(false)
    }
  }

  const addComment = async (commentData: Omit<CommentProps, "id" | "date">) => {
    try {
      setIsLoading(true)
      const response = await apiComment.create(commentData)
      setComments((prevComments) => [...prevComments, response.data]) // Atualiza o estado global
      return response.data
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const deleteComment = async (id: string) => {
    try {
      setIsLoading(true)
      await apiComment.delete(id)
      setComments((prevComments) => prevComments.filter((comment) => comment.id !== id)) // Atualiza o estado global
    } catch (error) {
      console.error(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CommentContext.Provider
      value={{
        comments,
        isLoading,
        getCommentsByPost,
        getCommentsByUser,
        addComment,
        deleteComment,
      }}
    >
      {children}
    </CommentContext.Provider>
  )
}

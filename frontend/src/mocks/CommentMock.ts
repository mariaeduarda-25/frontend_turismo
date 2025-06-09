import type { CommentProps } from "../types/CommentType"

export const mockComments: CommentProps[] = [
  {
    id: "comment-1",
    postId: "post-1",
    userId: "user-1",
    comment: "O hotel Hotel Chateau La Villette é muito bom! Recomendo.",
    data: "30/05/2025"
  },
  {
    id: "comment-2",
    postId: "post-1",
    userId: "user-2",
    comment: "O passeio de teleférico em Campos de Jordão é sensacional, vale muito a pena!",
    data: "22/05/2025"
  }
]

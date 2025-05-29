import type { CommentProps } from "../types/CommentType"

export const mockComments: CommentProps[] = [
  {
    id: "comment-1",
    postId: "post-1",
    userId: "user-1",
    comment: "Avaliação-1.",
    data: "29/05/2025"
  },
  {
    id: "comment-2",
    postId: "post-1",
    userId: "user-2",
    comment: "Avaliação-2.",
    data: "30/05/2025"
  },
  {
    id: "comment-3",
    postId: "post-2",
    userId: "user-2",
    comment: "Avaliação-3",
    data: "22/05/2025"
  }
]

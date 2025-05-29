// src/contexts/CommentContext.tsx
import { createContext, useState, type ReactNode} from "react";

interface Comment {
  postId: string;
  userId: string;
  autor: string;
  comment: string;
}

interface CommentContextType {
  addComment: (comment: Comment) => Promise<void>;
  comments: Comment[]; // opcional
}

// eslint-disable-next-line react-refresh/only-export-components
export const CommentContext = createContext<CommentContextType | null>(null);

export const CommentProvider = ({ children }: { children: ReactNode }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const addComment = async (newComment: Comment) => {
    console.log("Comentário adicionado:", newComment);

    // Aqui você pode integrar com Firebase, API etc.
    setComments((prev) => [...prev, newComment]);
  };

  return (
    <CommentContext.Provider value={{ addComment, comments }}>
      {children}
    </CommentContext.Provider>
  );
};

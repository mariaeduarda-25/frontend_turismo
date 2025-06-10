import { createContext, useState, type ReactNode} from "react";

export interface Comment {
  postId: string;
  userId: string;
  comment: string;
}

interface CommentContextType {
  addComment: (comment: Comment) => Promise<void>;
  comments: Comment[]; 
}

// eslint-disable-next-line react-refresh/only-export-components
export const CommentContext = createContext<CommentContextType | null>(null);

export const CommentProvider = ({ children }: { children: ReactNode }) => {
  const [comments, setComments] = useState<Comment[]>([]);

  const addComment = async (newComment: Comment) => {
    console.log("Comentário adicionado:", newComment);

    setComments((prev) => [...prev, newComment]);
  };

  return (
    <CommentContext.Provider value={{ addComment, comments }}>
      {children}
    </CommentContext.Provider>
  );
};

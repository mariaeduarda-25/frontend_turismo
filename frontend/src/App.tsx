import { GlobalStyle } from "./styles/GlobalStyle";
import { RouteWeb } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { CommentProvider } from "./contexts/CommentContext";

export function App() {
  return (
    <AuthProvider>
      <CommentProvider>
        <GlobalStyle />
        <RouteWeb />
      </CommentProvider>
    </AuthProvider>
  );
}

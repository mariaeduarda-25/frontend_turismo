import { createContext, useState, useEffect, type ReactNode, useContext } from "react";
import type { UserProps } from "../types/UserType";
import { mockUsers } from "../mocks/UserMock";

export interface AuthContextType {
  currentUser: UserProps | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  cadastro: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  currentUser: null,
  isLoading: true,
  login: async () => {},
  cadastro: async () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<UserProps | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const user = mockUsers.find((u) => u.email === email && u.password === password);

        if (user) {
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password: _, ...userWithoutPassword } = user;
          setCurrentUser(userWithoutPassword);
          localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword));
          resolve();
        } else {
          reject(new Error("Email ou senha invalido"));
        }
      }, 500);
    });
  };

  const cadastro = async (name: string, email: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const existingUser = mockUsers.find((u) => u.email === email);

        if (existingUser) {
          reject(new Error("email em uso"));
        } else {
          const newUser: UserProps = {
            id: `user-${Date.now()}`,
            name,
            email,
            password,
            role: "user",
          };

          mockUsers.push(newUser);

          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          const { password: _, ...userWithoutPassword } = newUser;
          setCurrentUser(userWithoutPassword);
          localStorage.setItem("currentUser", JSON.stringify(userWithoutPassword));
          resolve();
        }
      }, 500);
    });
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        isLoading,
        login,
        cadastro,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado com AuthProvider");
  }
  return context;
}

import type { UserProps } from "../types/UserType";

export const mockUsers: UserProps[] = [
  {
    id: "user-1",
    name: "Admin User",
    email: "admin@example.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: "user-2",
    name: "Maria",
    email: "maria@example.com",
    password: "user123",
    role: "user",
  },
  {
    id: "user-3",
    name: "Rebecca",
    email: "rebecca@example.com",
    password: "user1234",
    role: "user",
  },
];

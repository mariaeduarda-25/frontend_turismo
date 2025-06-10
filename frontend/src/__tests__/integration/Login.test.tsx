import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { App } from "../../App";
import { describe, it, vi, beforeEach, expect } from "vitest";

// Simula estado de login
let isLoggedIn: boolean = false;

interface User {
  email: string;
}

// Tipos corretos da função de mock
type UseAuthReturn = {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  currentUser: User | null;
};

// Mock do hook useAuth com tipagem
vi.mock("../../hooks/useAuth", () => ({
  useAuth: (): UseAuthReturn => ({
	login: vi.fn(async (email: string, password: string) => {
  	if (email === "ana@example.com" && password === "ana123") {
    	isLoggedIn = true;
    	return;
  	} else {
    	throw new Error("Email ou senha invalidos");
  	}
	}),
	logout: vi.fn(() => {
  	isLoggedIn = false;
	}),
	get currentUser() {
  	return isLoggedIn ? { email: "ana@example.com" } : null;
	}
  })
}));

beforeEach(() => {
  isLoggedIn = false;
});

describe("Login integrado", () => {
  it("faz login e vê a página Avaliações", async () => {
	render(
  	<MemoryRouter initialEntries={["/login"]}>
    	<App />
  	</MemoryRouter>
	);

	fireEvent.change(screen.getByPlaceholderText(/email:/i), {
  	target: { value: "ana@example.com" },
	});

	fireEvent.change(screen.getByPlaceholderText(/senha:/i), {
  	target: { value: "ana123" },
	});

	fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

	expect(await screen.findByText(/Avaliações/i)).toBeInTheDocument();
  });

  it("faz login e depois logout", async () => {
	render(
  	<MemoryRouter initialEntries={["/login"]}>
    	<App />
  	</MemoryRouter>
	);

	fireEvent.change(screen.getByPlaceholderText(/email:/i), {
  	target: { value: "ana@example.com" },
	});

	fireEvent.change(screen.getByPlaceholderText(/senha:/i), {
  	target: { value: "ana123" },
	});

	fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

	expect(await screen.findByText(/Avaliações/i)).toBeInTheDocument();

	fireEvent.click(await screen.findByText(/sair/i));

	expect(await screen.findByRole("button", { name: /entrar/i })).toBeInTheDocument();
  });
});

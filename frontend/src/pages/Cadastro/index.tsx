import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";

export const CadastrePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) return;

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await register(name, email, password);
      navigate("/");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao registrar");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main id="cadastro">
        <section>
          <h2>CADASTRE-SE</h2>

          {error && <p style={{ color: "red", marginBottom: "1rem" }}>{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Nome Completo:"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email:"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Senha:"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                placeholder="Confirmar Senha:"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            <div>
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Cadastrando..." : "Cadastrar"}
              </button>
            </div>

            <p style={{ marginTop: "1rem" }}>
              Já tem uma conta? <Link to="/login">Fazer login</Link>
            </p>
          </form>
        </section>
      </main>

      <Footer />
    </>
  );
};

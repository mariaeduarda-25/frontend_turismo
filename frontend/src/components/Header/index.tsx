import { SHeader } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import logo from "../../assets/logo.svg";

export function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <SHeader>
      <Link to="/">
        <img src={logo} alt="Imagem da logo do site" />
      </Link>

      <input type="checkbox" id="menu" />

      <nav>
        <label htmlFor="menu">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <div>
          <Link to="/hospedagens" className="botao">
            Hospedagens
          </Link>
          <Link to="/passeios" className="botao">
            Passeios
          </Link>
          <Link to="/avaliacoes" className="botao">
            Avaliações
          </Link>

          {currentUser ? (
            <button onClick={handleLogout} className="botao">
              Sair
            </button>
          ) : (
            <Link to="/login" className="botao">
              Login
            </Link>
          )}
        </div>
      </nav>
    </SHeader>
  );
}

import { SHeader } from "./styles";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

export function Header() {
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
          <Link to="/hospedagens" className="botao">Hospedagens</Link>
          <Link to="/passeios" className="botao">Passeios</Link>
          <Link to="/avaliacoes" className="botao">Avaliações</Link>
          <Link to="/login" className="botao"><strong>Login</strong></Link>
        </div>
      </nav>
    </SHeader>
  );
}

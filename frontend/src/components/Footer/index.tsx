import { SFooter } from "./styles";
import logoinstagram from "../../assets/img/logoinstagram.svg";

export function Footer() {
    return (
        <SFooter>
           <aside>
            Siga nossa página
            </aside>
            <a href="https://www.instagram.com/" target="_blank">
            <img src={logoinstagram} alt="Logo do Instagram" />
            </a>
        </SFooter>
    )
}
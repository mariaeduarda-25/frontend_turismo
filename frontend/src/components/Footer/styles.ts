import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SFooter = styled.footer`

    background-color: ${colors.primary};
    display: flex;
    align-items: center;
    height: 3rem;
    margin-top: 0.3rem;
    img {
        width: 20px; 
        height: 20px;
    }
`;
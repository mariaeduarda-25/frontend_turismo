import styled from "styled-components";
import { colors } from "../../styles/GlobalStyle";

export const SHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: ${colors.primary};
  padding: 10px 20px;

  img {
    height: 3rem;
    margin: 0.5rem;
  }

  input#menu {
    display: none;
  }

  nav {
    display: flex;
    align-items: center;
    margin-left: 2rem;
    gap: 1rem;

    div {
      display: flex;
      gap: 1rem;
    }

    a {
      text-decoration: none;
      color: ${colors.black};
      padding: 0.5rem;

      &.botao {
        margin-left: auto;
        background-color: ${colors.secondary};
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        font-weight: normal;
      }
    }

    label {
      display: none;
    }
  }

  @media (max-width: 610px) {
    justify-content: space-between;

    nav {
      div {
        display: none;

        a {
          background-color: ${colors.secondary};
          min-width: 8rem;
        }
      }

      label {
        display: flex;
        margin-left: 0.5rem;
        border: 0.18rem solid ${colors.black};
        width: 2.5rem;
        height: 2.5rem;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        cursor: pointer;

        span {
          border: 0.1rem solid ${colors.black};
          width: 1.6rem;
          height: 0.1rem;

          &:first-child {
            margin-top: 0.2rem;
          }

          &:last-child {
            margin-bottom: 0.2rem;
          }
        }
      }
    }

    input:checked ~ nav div {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 4rem;
      right: 0.5rem;
      align-items: flex-start;
    }
  }
`;
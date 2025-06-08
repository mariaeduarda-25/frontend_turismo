import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        border: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
`

export const colors = {
    primary: "#E3C3FA",
    secondary: "#BAF7F1",
    black: "#000",
    white: "#fff"
}
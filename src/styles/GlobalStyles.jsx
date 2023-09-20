import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

 * {
  padding: 0;
  margin: 0;
  outline: 0;
  box-sizing: border-box;
 }

 a {
  text-decoration: none;
  display: inline-block;
 }

 button {
  background: transparent;
  border: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
 }

 body {
  overflow-x: hidden;
  background: ${({ theme }) => theme.color.bg};
  color: ${({ theme }) => theme.color.text};
 }

 ul,li,ol {
  padding: 0;
  margin: 0;
  list-style: none;
 }

 h1 {
  font-size: 36px;
  line-height: 1.3;
 }

 h2 {
  font-size: 30px;
  line-height: 1.4;
 }
 h3 {
  font-size: 24px;
  line-height: 1.4;
 }
 h4 {
  font-size: 18px;
  line-height: 1.4;
 }
 h5 {
  font-size: 14px;
  line-height: 1.4;
 }
`;

export default GlobalStyle;

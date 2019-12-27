import { createGlobalStyle } from 'styled-components'
import '../../fonts/fonts-ui.css'

export const GlobalStyle = createGlobalStyle`
  html{
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  }
  body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'GT Eesti', '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol', sans-serif;
    text-rendering: optimizeLegibility;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    font-weight: 300;
    font-size: 1.8rem;
    line-height: 1.2;
    letter-spacing: 0.02em;
    padding: 0;
    margin: 0;
    @media (max-width: 600px) {
      font-size: 1.6rem;
    }
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: 500;
    color: ${({theme}) => theme.title} 
  }
  a{
    text-decoration: none;
  }
  .invert-filter{
    filter: ${({theme}) => theme.filter} 
  }
`

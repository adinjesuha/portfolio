import { createGlobalStyle } from 'styled-components'
import '../../fonts/fonts-ui.css'
import { device } from '../../utils/brakpoints'

export const GlobalStyle = createGlobalStyle`
  :root{
    --dark-700: #15181E;
    --dark-500: #212429;
    --dark-300: #35383D;
    --dark-100: #62707B;

    --grey-700: #333D41;
    --grey-500: #575B60;
    --grey-300: #9CA1A6;
    --grey-100: #BBBBBB;

    --light-500: #F7FAFD;
    --white: #ffffff;

    --brand: #FF2848;
  }
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
    font-size: 1.6rem;
    line-height: 1.2;
    letter-spacing: 0.02em;
    padding: 0;
    margin: 0;
    @media ${device.tablet}{
      font-size: 1.8rem;
    }
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: 500;
    color: ${({theme}) => theme.title} 
  }
  h2{
    font-size: 3.2rem;
  }
  a{
    text-decoration: none;
  }
  input,
  textarea,
  select {
    border: none;
    border-radius: 0.4rem;
    background-color: ${({theme}) => theme.form.background};
    color: ${({theme}) => theme.form.text};
    font-weight: 300;
    font-size: 1.6rem;
    font-family: 'GT Eesti', '-apple-system','BlinkMacSystemFont','Segoe UI','Roboto','Helvetica','Arial','sans-serif','Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol', sans-serif;
    margin-bottom: 2rem;
    padding: 1.4rem 0 1.4rem 1.4rem;
    width: 100%;
    &:focus {
      outline: 0;
    }
  }
  button,
  input[type='submit'] {
    font-size: 1.8rem;
    color: var(--white);
    cursor: pointer;
    border: 0;
    border-radius: 0.4rem;
    padding: 1rem 1.6rem;
    width: auto;
  }
  input[type='radio']{
    position: absolute;
    left: -9999em;
  }
  input[type='radio'] + label{
    background: transparent;
    color: var(--brand);
  }
  input[type="radio"]:checked + label{
    background: var(--brand);
    color: var(--white);
  }

  .invert-filter{
    filter: ${({theme}) => theme.filter};
  }
  .theme-bg{
    background: ${({theme}) => theme.background}
  }
  .btn-primary{
    background-color: var(--brand);
    color: var(--white);
  }
  @media ${device.tablet}{
    h2{
      font-size: 4.2rem;
    }
  }
`

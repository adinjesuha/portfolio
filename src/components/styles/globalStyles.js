import { createGlobalStyle } from 'styled-components'

import { device } from '../../utils/brakpoints'
import '../../fonts/fonts-ui.css'

export const GlobalStyle = createGlobalStyle`
  :root{
    --dark-700: #15181E;
    --dark-500: #212429;
    --dark-300: #35383D;
    --dark-100: #62707B;
    
    --grey-700: #333D41;
    --grey-500: #575B60;
    
    --light-500: #F7FAFD;
    --white: #ffffff;
    --brand: #FF2848;

    // fixed
    --grey-300: #888;
    --grey-100: #f9f9f9;
    --dark-500: #1B1F26;
    
  }
  html{
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after{
    box-sizing: inherit;
  }
  body.no-js .reveal {
    opacity: 1 !important;
    transform: none !important;
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
    @media ${device.tablet}{
      font-size: 2rem;
    }
  }
  h1, h2, h3, h4, h5, h6{
    font-weight: 400;
    color: ${({theme}) => theme.title};
    margin: 0;
    margin-bottom: 2rem;
  }
  h1{
    font-size: 4.2rem;
  }
  h2{
    font-size: 3.2rem;
  }
  h3{
    font-size: 2rem;
  }
  p{
    line-height: 1.5;
    letter-spacing: 0.04em;
  }
  a{
    color: ${({theme}) => theme.title};
    text-decoration: none;
  }
  input,
  textarea,
  select {
    border: 0px solid;
    border-color: none;
    border-radius: 0.2rem;
    background-color: ${({theme}) => theme.form.background};
    color: ${({theme}) => theme.form.text};
    font-weight: 300;
    font-size: 1.6rem;
    font-family: 'GT Eesti', sans-serif;
    margin-bottom: 1.5rem;
    width: 100%;
    padding: 1.4rem 0 1.4rem 1.4rem;
    &:focus {
      outline: 0;
    }
    @media ${device.tablet}{
      padding: 2rem 1.6rem;
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }
  }
  button,
  input[type='submit'],
  .btn{
    font-size: 1.8rem;
    color: var(--white);
    cursor: pointer;
    border: 0;
    border-radius: 0.2rem;
    padding: 1.4rem 1.6rem;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    @media ${device.tablet}{
      padding: 2rem 1.6rem;
    }
  }
  .btn--fixed-width{
    width: 240px;
  }
  button:disabled,
  button[disabled]{
    background-color: var(--dark-100);
    color: var(--grey-100);
    cursor: no-drop;
  }
  input[type='radio']{
    position: absolute;
    left: -9999em;
  }
  .brand-color{
    color: var(--brand);
  }
  .btn-primary{
    background-color: var(--brand);
    color: var(--white);
  }
  .separator{
    background-color: var(--brand);
    margin: 2rem auto;
    display: block;
    height: 3px;
    width: 40px;
    &__primary{
      margin: 2.5rem auto;
    }
    &__small{
      margin: 1rem auto;
    }
  }

  @media ${device.tablet}{
    h1{
      font-size: 5.2rem;
    }
    h2{
      font-size: 4.2rem;
    }
    h3{
      font-size: 2.8rem;
    }
    .separator{
      margin: 3rem auto;
      &__small{
        margin: 2rem auto;
      }
      &__primary{
        margin: 4rem 0;
      }
    }
  }
`

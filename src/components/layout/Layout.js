import React from "react"
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import styled, { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './theme'
import { GlobalStyle } from './globalStyles'
import { useDarkMode } from '../useDarkMode'
import Header from './header'
import Toggle from '../toggle'
import Footer from './footer'

const StyledPage = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
`

const Layout = ({ children }) => {
  const [theme, toggleTheme, componentMounted] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
  if (!componentMounted) {
    return <div />
  };
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header 
        themeBg={themeMode.navbarBackground}
        className="navbar-bg" 
        fill={themeMode.logo} 
      />
      <Toggle isDark={theme === 'dark'} toggle={toggleTheme}/>
      <StyledPage>
        <main>{children}</main>
        <Footer />
      </StyledPage>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

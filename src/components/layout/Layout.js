import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from 'styled-components'

import { lightTheme, darkTheme } from './theme'
import { GlobalStyle } from './globalStyles'
import { useDarkMode } from '../useDarkMode'
import Header from './header'
import Footer from './footer'

const StyledPage = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
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
        toggle={toggleTheme}
        isDark={theme === 'dark'}
      />
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

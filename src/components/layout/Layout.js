import React from "react"
import { Link } from 'gatsby'
import PropTypes from "prop-types"
import styled, { ThemeProvider } from 'styled-components'

import Logo from '../logo'
import Toggle from '../toggle'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyle } from './globalStyles'
import { useDarkMode } from '../useDarkMode'

const StyledPage = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  padding: 3rem 2rem 0;
  .right-nav{
    display: flex;
    align-items: center;
  }
`
const BtnLink = styled(Link)`
  background: #FF2848;
  color: #ffff;
  display: inline-block;
  padding: 1rem 1.6rem;
  border-radius: 0.4rem;
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
      <Header>
        <Logo fill={themeMode.logo}/>
        <div className="right-nav">
          <BtnLink>Contáctame</BtnLink>
          <Toggle isDark={theme === 'dark'} toggle={toggleTheme}/>
        </div>
      </Header>
      <StyledPage>
        <main>{children}</main>
        <footer>
          <h3>© {new Date().getFullYear()}, Adin Jesuha</h3>
        </footer>
      </StyledPage>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

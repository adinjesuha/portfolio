import React from 'react'
import styled from 'styled-components'

const FooterBottom = styled.div`
  margin-top: 6rem;
  padding-top: 4rem;
  text-align: center;
  border-top: 1px solid ${({theme}) => theme.borderColor};
`

const Footer = () => {
  return (
    <footer>
      <FooterBottom>
        <h3>© {new Date().getFullYear()}, Adin Jesuha</h3>
      </FooterBottom>
    </footer>
  )
}

export default Footer;
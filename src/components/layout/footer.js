import React from 'react'
import styled from 'styled-components'

import Form from '../form/form'

const FooterBottom = styled.div`
  margin-top: 6rem;
  padding-top: 4rem;
  text-align: center;
`

const Footer = () => {
  return (
    <footer>
      <Form />
      <FooterBottom className="theme-border">
        <h3>© {new Date().getFullYear()}, Adin Jesuha</h3>
      </FooterBottom>
    </footer>
  )
}

export default Footer;
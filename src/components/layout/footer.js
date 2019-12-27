import React from 'react'
import Form from '../form/form'

const Footer = () => {
  return (
    <footer>
      <Form />
      <h3>© {new Date().getFullYear()}, Adin Jesuha</h3>
    </footer>
  )
}

export default Footer;
import React from "react"
import PropTypes from "prop-types"

import Header from './header'
import Footer from './footer'

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <main>{children}</main>
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

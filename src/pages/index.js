import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Landing from '../components/sections/landing'
import About from '../components/sections/about'
import Works from '../components/sections/works'
import Technologies from '../components/sections/technologies'
import Contact from '../components/sections/contact'

const IndexPage = () => (
  <Layout isOnePage={true}>
    <SEO title="Home" />
    <Landing />
    <About />
    <Technologies />
    <Works />
    <Contact />
  </Layout>
)

export default IndexPage

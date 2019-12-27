import React from "react"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo"
import Landing from '../components/sections/Landing'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Technologies from '../components/sections/Technologies'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Projects />
    <Technologies />
  </Layout>
)

export default IndexPage

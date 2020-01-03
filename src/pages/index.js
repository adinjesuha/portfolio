import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Landing from '../components/sections/landing'
import About from '../components/sections/about'
import Works from '../components/sections/works'
import Technologies from '../components/sections/technologies'
import PreFooter from '../components/sections/pre-footer'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Landing />
    <About />
    <Technologies />
    <Works />
    <PreFooter />
  </Layout>
)

export default IndexPage

import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import Landing from '../components/sections/landing'
import About from '../components/sections/about'
import Tech from '../components/sections/tech'
import Works from '../components/sections/works'
import Contact from '../components/sections/contact'


const IndexPage = () => (
  <Layout isOnePage={true}>
    <SEO title="Home" />
    <Landing />
    <About />
    <Tech />
    <Works />
    <Contact />
  </Layout>
)

export default IndexPage

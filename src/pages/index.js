import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from '../components/content-sections/landing'
import About from '../components/content-sections/about'
import Tech from '../components/content-sections/tech'
import Works from '../components/content-sections/works'
import Contact from '../components/basicForm'
// import Contact from '../components/content-sections/contact'


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

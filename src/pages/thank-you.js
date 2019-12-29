import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import ThankYou from '../components/sections/thank-you'

const ThankU = () => {
  return (
    <Layout>
      <SEO title="Thank you!" />
      <ThankYou />
  </Layout>
  )
}

export default ThankU
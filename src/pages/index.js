import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FiltersContainer from "../components/filters-container"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FiltersContainer />
  </Layout>
)

export default IndexPage

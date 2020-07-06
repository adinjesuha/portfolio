import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FiltersContainer from "../components/filter/"

const IndexPage = () => (
  <Layout>
    <SEO title="Developer" />
    <FiltersContainer />
  </Layout>
)

export default IndexPage

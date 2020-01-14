import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BasicForm from '../components/basicForm'

const Contact = () => {
  return (
    <Layout isOnePage={false}>
      <SEO title="Contact" />
      <BasicForm />
    </Layout>
  )
}

export default Contact
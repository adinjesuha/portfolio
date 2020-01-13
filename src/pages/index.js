import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Landing from '../components/content-sections/landing'
import About from '../components/content-sections/about'
import Tech from '../components/content-sections/tech'
import Works from '../components/content-sections/works'
import Contact from '../components/content-sections/contact'


const IndexPage = () => (
  <Layout isOnePage={true}>
    <SEO title="Home" />
    <Landing />
    <About />
    <Tech />
    <Works />
    <form
      data-netlify="true"
      data-netlify-recaptcha="true"
      hidden
      name="contact"
      netlify-honeypot="bot-field"
    >
      <input name="bot-field" type="hidden" />
      <input type="text" name="name" />
      <input type="email" name="email" />
      <input 
        type="radio" 
        name="projectType" 
        value="Website"
      />
      <input 
        type="radio" 
        name="projectType" 
        value="PWA"
      />
      <input 
        type="radio" 
        name="projectType" 
        value="PeCommerceWA"
      />
      <input 
        type="radio" 
        name="projectType" 
        value="Otros"
      />
      <textarea name="message" />
    </form>
    <Contact />
  </Layout>
)

export default IndexPage

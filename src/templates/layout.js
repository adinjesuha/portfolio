import React from "react"
import { MDXProvider } from "@mdx-js/react"

export default ({ children }) => (
  <MDXProvider>{children}</MDXProvider>
)
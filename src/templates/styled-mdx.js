import React from "react"
import { Heading, Text } from '@chakra-ui/core'

const H1 = props => (
  <Heading
    as="h2"
    mb="20px"
    fontSize={{base: "xl", md: "2xl"}}
    fontWeight="400"
    color="#fff"
    {...props}
  />
)

const Paragraph = props => (
  <Text
    fontSize={{lg: "20px"}}
    color="#979797"
    mb="15px"
    {...props}
  />
)

const Link = props => (
  <a
    style={{
      color: "#fff",
      textDecoration: "underline",
    }}
    {...props}
  />
)

const Strong = props => (
  <strong 
    style={{
      fontWeight: "400",
      color: "#fff"
    }}
    {...props}
  />
)

const CenteredTag = props => (
  <center
    style={{
      fontSize:"20px",
    }}
    {...props}
  />
)

export const components = {
  h1: H1,
  p: Paragraph,
  a: Link,
  strong: Strong,
  center: CenteredTag,
}
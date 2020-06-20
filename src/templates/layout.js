import React from "react"
import { MDXProvider,  } from "@mdx-js/react"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Box, Heading, Flex, Text, PseudoBox } from '@chakra-ui/core'

import { Close, Item, Logo } from './UI'
import { components } from './styled-mdx-components'
import Image from '../components/image'
import Slider from "../components/slider"
import { slideData } from "../fakeData/slides"

export default ({ children, pageContext }) => (
  <ModalRoutingContext.Consumer>
    {({closeTo}) => (
      <Box
        m="0 auto"
        maxW="750px"
        p="6vw 8vw"
        bg="#222222"
        color="#f4f4f4"
        boxShadow="0 0 45px rgba(0,0,0,.15)"
        transition="opacity 1s"
        minH="calc(100vh - (6vw * 2))"
        boxSizing="content-box"
        pos="relative"
      >
        <Close
          to={closeTo}
          state={{
            noScroll: true,
          }}
        />
        <Logo 
          logo={pageContext.frontmatter.logo}
          logoDescription={pageContext.frontmatter.logoDescription}
        />
        <Heading 
          as="h1"
          mb="60px"
          fontWeight="400"
          fontSize={{base: "3xl", lg: '4xl'}}
        >
          {pageContext.frontmatter.title}
        </Heading>
        <Flex
          flexDir={{base: "column", md:"row"}}
        >
          <Box
            order={{base: "2", md:"initial"}}
            w={{base: "100%", md:"calc(100% - 280px)"}}
          >
            <Heading
              as="h2"
              fontSize={{base: "xl", md: "2xl"}}
              fontWeight="400"
            >About the client</Heading>
            <Text
              fontSize={{lg: "20px"}}
              mt="15px"
              color="#979797"
            >
              {pageContext.frontmatter.description}</Text>
          </Box>
          <Box
            w={{base: "100%", md:"280px"}}
            pl={{md:"30px"}}
            textAlign={{base: "left", md: "right"}}
          >
            <Item 
              heading="Role"
              options={pageContext.frontmatter.role}
            />
            <Item 
              heading="Deliverables"
              options={pageContext.frontmatter.deliverables}
            />
          </Box>
        </Flex>
        {pageContext.frontmatter.carouselImages ? (
          <Box mb="40px">
            <Slider slideData={pageContext.frontmatter.carouselImages}/>
          </Box>
          ):(
          <Box 
            w="calc(100% + 16vw)"
            maxW="none"
            h="auto"
            m="0 0 50px calc(-1 * 8vw)"
            mt={{base:"50px", md: "0"}}
            pos="relative"
          >
            <Image imgName={pageContext.frontmatter.img}/>
          </Box>
        )}
        <Flex
          flexDir={{base: "column", md:"row"}}
        >
          <Box
            order={{base: "2", md:"initial"}}
            w={{base: "100%", md:"calc(100% - 280px)"}}
          >
            <MDXProvider components={components}>{children}</MDXProvider>
          </Box>
          <Box
            w={{base: "100%", md:"280px"}}
            pl={{md:"30px"}}
            textAlign={{base: "left", md: "right"}}
          >
            <Heading 
              as="h4"
              fontSize={{base: "xl", md: "2xl"}}
              fontWeight="400"
              mb="15px"
            >Links</Heading>
            <PseudoBox 
              as={pageContext.frontmatter.web !== "Comming soon" ? "a" : "span"}
              href={pageContext.frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
              color={pageContext.frontmatter.web !== "Comming soon" ? "#FF2848" : "#9a9a9a"}
              fontSize={{lg: "20px"}}
              mb="20px"
              display="inline-block"
            >
              {pageContext.frontmatter.web}
            </PseudoBox>
            <Heading 
              as="h4"
              fontSize={{base: "xl", md: "2xl"}}
              fontWeight="400"
              mb="15px"
            >Stack</Heading>
            <Text
              fontSize={{lg:"20px"}}
              color="#9a9a9a"
              mt="10px"
              whiteSpace="pre-line"
              textTransform="capitalize"
            >{pageContext.frontmatter.stack.join(', ')}</Text>
          </Box>
        </Flex>
      </Box>
    )}
  </ModalRoutingContext.Consumer>
)
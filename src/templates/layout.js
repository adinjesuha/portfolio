import React from "react"
import { Link } from 'gatsby'
import { MDXProvider,  } from "@mdx-js/react"
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'
import { Box, Heading, Text, Flex } from '@chakra-ui/core'
import styled from '@emotion/styled'

import Image from '../components/image'
import Logo from '../images/wikibuy.png'

const Close = styled(Link)`
  display: block;
  position: fixed;
  top: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  border-radius: 50px;
  background: rgba(0,0,0,.15);
  border: 2px solid rgba(255,255,255,.5);
  z-index: 10;
  cursor: pointer;
  transition: background .3s,color .3s,border .3s;
  &::before, &::after{
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0) rotate(45deg);
    width: 65%;
    height: 2px;
    background: #fff;
    border-radius: 25px;
    transition: background .3s;
  }
  &::after{
    transform: translate3d(-50%,-50%,0) rotate(-45deg);
  }
  &:hover{
    background: #fff;
    color: #000;
    border-color: rgba(255,255,255,1);
    &::after {
      background: #000;
    }
    &::before{
      background: #000;
    }
  }
`

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
        <Box
          mb="25px"
        >
          <Box 
            w="44px"
            h="44px"
            borderRadius="50%"
            overflow="hidden"
            display="inline-block"
            verticalAlign="top"
          >
            <img src={Logo} width="100%" hight="100%" alt="logo"/>
          </Box>
          <Box 
            as="span"
            display="inline-block"
            verticaAlign="top"
            pl="10px"
            lineHeight="44px"
          >Wibuky</Box>
        </Box>
        <Heading 
          as="h1"
          mb="60px"
          fontWeight="300"
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
              fontWeight="300"
            >The Project Overview</Heading>
            <Text
              fontSize={{lg: "20px"}}
              fontWeight="lighter"
              opacity="0.6"
              mt="20px"
            >{pageContext.frontmatter.description}</Text>
          </Box>
          <Box
            w={{base: "100%", md:"280px"}}
            pl={{md:"30px"}}
            textAlign={{base: "left", md: "right"}}
          >
            <Box
              mb="40px"
            >
              <Heading 
                as="h4"
                fontSize={{base: "xl", md: "2xl"}}
                fontWeight="300"
                >Role:</Heading>
                <Text
                fontSize={{lg:"20px"}}
                fontWeight="lighter"
                color="#9a9a9a"
                mt="10px"
                lineHeight="1.8em"
                whiteSpace="pre-line"
              >Designer</Text>
            </Box>
            <Box
              mb="40px"
            >
              <Heading 
                as="h4"
                fontSize={{base: "xl", md: "2xl"}}
                fontWeight="300"
              >Deliverables:</Heading>
              <Text
                fontSize={{lg:"20px"}}
                fontWeight="lighter"
                color="#9a9a9a"
                mt="10px"
                lineHeight="1.8em"
                whiteSpace="pre-line"
              >PSD files</Text>
            </Box>
          </Box>
        </Flex>
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
        <MDXProvider>{children}</MDXProvider>
        {console.log(pageContext)}
      </Box>
    )}
  </ModalRoutingContext.Consumer>
)
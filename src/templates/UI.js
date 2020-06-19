import React from "react"
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { Box, Heading, Text } from '@chakra-ui/core'

import Image from '../components/image'

export const Close = styled(Link)`
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

export const ImageWrapper = styled(Box)`
  &::last-child{
    margin-right: 0 !important; 
  }
  .gatsby-image-wrapper{
    opacity: .3;
    filter: invert(1);
  }
`

export const Logo = ({logo, logoDescription}) => (
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
      <Image imgName={logo} width="100%" hight="100%" alt="logo"/>
    </Box>
    <Box 
      as="span"
      display="inline-block"
      verticaAlign="top"
      pl="10px"
      lineHeight="44px"
    >
      {logoDescription}
    </Box>
  </Box>
)

export const Item = ({heading, options}) => (
  <Box
    mb="40px"
  >
    <Heading 
      as="h4"
      fontSize={{base: "xl", md: "2xl"}}
      fontWeight="400"
    >
      {heading}
    </Heading>
    {options.map((option, i) => (
      <Text
        key={`${option}-${i}`}
        fontSize={{lg:"20px"}}
        color="#9a9a9a"
        mt="10px"
        whiteSpace="pre-line"
      >
        {option}
      </Text>
    ))}
  </Box>
)
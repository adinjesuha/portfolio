import React from 'react'
import { Link } from 'gatsby'
import { PseudoBox } from '@chakra-ui/core'

export default ({children}) => (
  <PseudoBox
    as={Link}
    display="inline-block"
    fontSize="16px"
    p="0 12px"
    lineHeight="40px"
    pos="relative"
    textAlign="center"
    _after={{
      content:'""',
      display:"block",
      pos:"absolute",
      top:"50%",
      left:"50%",
      transform:"translate3d(-50%,-50%,0) scale(0)",
      w:"100%",
      h:"0",
      pb:"100%",
      background:"blue",
      zIndex:"-1",
      borderRadius:"50%",
      transition:"transform .3s",
    }}
  >
    <svg
      data-icon="twitter"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      display="inline-block"
      overflow="visible"
      w="1em"
      h="1em"
      verticalAlign="-.125em"
    >
      {children}
    </svg>
  </PseudoBox>
)
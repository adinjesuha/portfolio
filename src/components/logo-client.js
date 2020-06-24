import React from 'react'
import { Box } from '@chakra-ui/core'
import Image from './image'

export default ({logo, logoDescription}) => (
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
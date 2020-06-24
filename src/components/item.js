import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Text } from '@chakra-ui/core'

import Image from './image'
import LogoClient from './logo-client'

export default ({data}) => {
  return (
    <div className="masonry-item">
      <Link
        to={data.node.frontmatter.path}
        state={{
          modal: true
        }}
        style={{
          outline: "0"
        }}
      >
        <LogoClient 
          logo={data.node.frontmatter.logo}
          logoDescription={data.node.frontmatter.logoDescription}
        />
        <Box
          position="relative"
          overflow="hidden"
          borderRadius="3px"
        >
          <Image imgName={data.node.frontmatter.img}/>
        </Box>
        <Box
          transition="opacity 200ms ease-in-out 0s"
          willChange="opacity"
        >
          <Heading
            as="h3"
            fontWeight="500"
            fontSize="2xl"
            m="10px 0 20px"
          >{data.node.frontmatter.title}</Heading>
        </Box>
      </Link>
      <Text
        fontSize="md"
        opacity="0.5"
      >
        {data.node.frontmatter.role.join(', ')}
      </Text>
    </div>
  )
}

import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Text } from '@chakra-ui/core'

import Image from './image'
import LogoClient from './logo-client'

const LinkCard = ({data}) => (
  <Box
    as="a"
    target="_blank" 
    rel="noopener"
    href={data.node.frontmatter.path}
    boxShadow="0 15px 30px rgba(0,0,0,.15)"
    display="block"
    color="var(--text-color)"
    textDecoration="none"
  >
    <Box
      w="100%"
      overflow="hidden"
      backgroundColor="#000"
    >
      <Image imgName={data.node.frontmatter.img}/>
    </Box>
    <Box
      bg="#232323"
      p="30px"
      pos="relative"
      lineHeight="1.5em"
    >
      <Box
        mb="15px"
        pos="relative"
        zIndex="1"
      >
        <Heading
          as="h3"
          fontSize="2xl"
          fontWeight="500"
          letterSpacing=".5px"
          margin="10px 0 20px"
        >
          {data.node.frontmatter.title} 
          <Box
            as="svg"
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="link"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fontSize="18px"
            verticalAlign="middle"
            pl="5px"
            w="1em"
            display="inline-block"
          >
            <path
              fill="currentColor"
              d="M301.148 394.702l-79.2 79.19c-50.778 50.799-133.037 50.824-183.84 0-50.799-50.778-50.824-133.037 0-183.84l79.19-79.2a132.833 132.833 0 0 1 3.532-3.403c7.55-7.005 19.795-2.004 20.208 8.286.193 4.807.598 9.607 1.216 14.384.481 3.717-.746 7.447-3.397 10.096-16.48 16.469-75.142 75.128-75.3 75.286-36.738 36.759-36.731 96.188 0 132.94 36.759 36.738 96.188 36.731 132.94 0l79.2-79.2.36-.36c36.301-36.672 36.14-96.07-.37-132.58-8.214-8.214-17.577-14.58-27.585-19.109-4.566-2.066-7.426-6.667-7.134-11.67a62.197 62.197 0 0 1 2.826-15.259c2.103-6.601 9.531-9.961 15.919-7.28 15.073 6.324 29.187 15.62 41.435 27.868 50.688 50.689 50.679 133.17 0 183.851zm-90.296-93.554c12.248 12.248 26.362 21.544 41.435 27.868 6.388 2.68 13.816-.68 15.919-7.28a62.197 62.197 0 0 0 2.826-15.259c.292-5.003-2.569-9.604-7.134-11.67-10.008-4.528-19.371-10.894-27.585-19.109-36.51-36.51-36.671-95.908-.37-132.58l.36-.36 79.2-79.2c36.752-36.731 96.181-36.738 132.94 0 36.731 36.752 36.738 96.181 0 132.94-.157.157-58.819 58.817-75.3 75.286-2.651 2.65-3.878 6.379-3.397 10.096a163.156 163.156 0 0 1 1.216 14.384c.413 10.291 12.659 15.291 20.208 8.286a131.324 131.324 0 0 0 3.532-3.403l79.19-79.2c50.824-50.803 50.799-133.062 0-183.84-50.802-50.824-133.062-50.799-183.84 0l-79.2 79.19c-50.679 50.682-50.688 133.163 0 183.851z"
            ></path>
          </Box> 
        </Heading>
        <Text
          opacity=".5"
          mb="15px"
        >
          {data.node.frontmatter.description}
        </Text>
        <Box opacity=".5">
          {data.node.frontmatter.role.join(', ')}
        </Box>
      </Box>  
    </Box>
  </Box>
)

const ModalCard = ({data}) => (
  <React.Fragment>
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
      <Box>
        <Heading
          as="h3"
          fontWeight="500"
          fontSize="2xl"
          m="10px 0 20px"
        >{data.node.frontmatter.title}</Heading>
      </Box>
    </Link>
    <Text fontSize="md" opacity="0.5">
      {data.node.frontmatter.role.join(', ')}
    </Text>
  </React.Fragment>
)

export default ({data}) => {
  const { linkCard } = data.node.frontmatter
  return (
    <Box className="masonry-item" >
      {linkCard ? (
        <LinkCard data={data}/>
      ) : (
        <ModalCard data={data}/>
      )}
    </Box>
  )
}
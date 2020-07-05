import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Box } from '@chakra-ui/core'
import Snuggle from 'react-snuggle'

import Item from '../item'

export default({activeTab, refProp}) => {
  const data = useStaticQuery(graphql`
    query allMDX {
      allMdx(sort: {fields: frontmatter___order}){
        edges{
          node{
            frontmatter{
              title
              description
              category
              path
              img
              role
              logo
              logoDescription
              linkCard
              article
            }
          }
        }
      }
    }
  `)

  let filteredData; 

  if(activeTab === "all"){
    filteredData = data.allMdx.edges
  }else{
    filteredData = data.allMdx.edges.filter( mdx => mdx.node.frontmatter.category === activeTab)
  }


  return (
    <Box 
      ref={refProp}
      mt={{base: "40px", md: "50px", xl:"190px"}}
    >
      <Snuggle
        columnWidth="300"
        rowGap="60"
      >
      {filteredData.map((data, index) => (
        <Item
          key={index}
          data={data}
        />
      ))}
      </Snuggle>
    </Box>
  )
}

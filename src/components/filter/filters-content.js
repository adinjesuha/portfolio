import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Box } from '@chakra-ui/core'

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
      className="masonry-grid"
      p={{base:"30px 0 10px", xl: "150px 0 0"}}
    >
    {filteredData.map((data, index) => (
      <Item
        key={index}
        data={data}
      />
    ))}
    </Box>
  )
}

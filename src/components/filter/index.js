import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/core'


import Image from '../image'
import FilterTab from './filters-tab'

export default () => {

  const [ activeFilter, setActiveFilter ] = useState(false)
  const [ activeTab, setActiveTab ] = useState("all");

  const data = useStaticQuery(graphql`
    query allMDX {
      allMdx(sort: {fields: frontmatter___order}){
        edges{
          node{
            frontmatter{
              title
              category
              path
              img
              role
            }
          }
        }
      }
    }
  `)

  const handleActiveTab = e => {
    setActiveTab(e.target.id)
  }
  const handleActiveFilter = () => {
    setActiveFilter(!activeFilter)
  }

  let filteredData; 
  if(activeTab === "all"){
    filteredData = data.allMdx.edges
  }else{
    filteredData = data.allMdx.edges.filter( mdx => mdx.node.frontmatter.category === activeTab)
  }

  return (
    <React.Fragment>
      <FilterTab
        handleActiveTab={handleActiveTab}
        handleActiveFilter={handleActiveFilter}
        activeTab={activeTab}
        activeFilter={activeFilter}
      />
      <SimpleGrid 
        columns={[1, null, 2]} 
        spacing={[2, null, 8, 10]}
      >
        {filteredData.map((data, index) => {
          return (
            <Box
              key={index}
              as="article"
              mb="1.5em"
            >
              <Link
                to={data.node.frontmatter.path}
                state={{
                  modal: true
                }}
                style={{
                  outline: "0"
                }}
              >
                <Box
                  position="relative"
                  overflow="hidden"
                >
                  <Image imgName={data.node.frontmatter.img}/>
                </Box>
                <Box
                  transition="opacity 200ms ease-in-out 0s"
                  willChange="opacity"
                >
                  <Heading
                    fontWeight="500"
                    fontSize={["xl", "1xl", "2xl"]}
                    mt="1.3em"
                    mb="1em"
                  >{data.node.frontmatter.title}</Heading>
                  <Text
                    fontSize={["md", "lg", null]}
                  >
                  {data.node.frontmatter.role.join(', ')}
                  </Text>
                </Box>
              </Link>
            </Box>
          )
        })}
      </SimpleGrid>
    </React.Fragment>
  )
}

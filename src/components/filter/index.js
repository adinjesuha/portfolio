import React, { useState } from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from "gatsby"
import { Box, Grid, Heading, Text } from '@chakra-ui/core'
import styled from '@emotion/styled'


import Image from '../image'
import FilterTab from './filters-tab'

const CustomBox = styled(Box)`
  @media (min-width: 48em){
    grid-row-end: span 100;
  }
  @media (min-width: 62em){
    grid-row-end: ${props => 
      props.index === 0 ? 'span 100' : 
      props.index === 1 ? 'span 112' : 
      props.index === 2 ? 'span 101' : 'span 111'
    };
  }

`

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
              description
              category
              path
              img
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
      <Grid 
        columnGap="3rem"
        gridTemplateColumns={{baser: "1fr", md: "1fr 1fr"}}
        marginTop={{base: "2.2em", md: "2.9em", lg: ".4em"}}
      >
        {filteredData.map((data, index) => (
          <CustomBox
            index={index}
          >
            <Box
              as="article"
              mb="3em"
            >
              <Link
                key={index}
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
                  >{data.node.frontmatter.description}</Text>
                </Box>
              </Link>
            </Box>
          </CustomBox>
        ))}
      </Grid>
    </React.Fragment>
  )
}

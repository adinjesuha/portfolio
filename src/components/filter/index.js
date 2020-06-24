import React, { useState, useRef, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { Box } from '@chakra-ui/core'

import FilterTab from './filters-tab'
import FilterTabFixed from './filters-tab-fixed'
import Item from '../item'
import MailTo from '../mail-to'

export default () => {

  const [ activeFilter, setActiveFilter ] = useState(false)
  const [ activeTab, setActiveTab ] = useState("all");
  const [ elementAppear, setElementAppear ] = useState(false)

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
              logo
              logoDescription
            }
          }
        }
      }
    }
  `)

  let refElem = useRef(0)

  useEffect(() => {
    function handleAppear() {
      if(refElem.current.getBoundingClientRect().top < -300) {
        setElementAppear(true)
      }else {
        setElementAppear(false)
      }
    }
    window.addEventListener("scroll", handleAppear)
    return () => {
      window.removeEventListener("scroll", handleAppear)
    }
  }, [])

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
      <FilterTabFixed
        handleActiveTab={handleActiveTab}
        handleActiveFilter={handleActiveFilter}
        activeTab={activeTab}
        activeFilter={activeFilter}
        translateEl={elementAppear}
      />
      <MailTo translateEl={elementAppear}/>
      <Box 
        ref={refElem}
        className="masonry-grid"
        p={{base:"50px 0", lg:"150px 0"}}
      >
      {filteredData.map((data, index) => (
        <Item
          data={data}
          key={index}
        />
      ))}
      </Box>
    </React.Fragment>
  )
}

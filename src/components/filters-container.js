import React, { useState } from 'react'
import { Box, Avatar, PseudoBox } from '@chakra-ui/core'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import AvatarImage from '../images/avatar.png'
import ArrowIconDown from '../images/mobile-filter-down-arrow.svg'
import ArrowIconRight from '../images/mobile-filter-right-arrow.svg'
import CloseIcon from '../images/mobile-filter-close.svg'

const tabs = [
  {index: 0, tabId: "tab-1", label: "All"},
  {index: 1, tabId: "tab-2", label: "Web Design"},
  {index: 2, tabId: "tab-3", label: "Open Source"},
  {index: 3, tabId: "tab-4", label: "About Me"},
]

const CustomPseudoBox = styled(PseudoBox)(css`
  @media (min-width: 48em){
    &:after{
      content: none;
    }
    &:before{
      content: none;
    }
  }
`)

const TabItem = ({tabId, label, handleActiveTab, activeTab, activeFilter}) => {
  return(
    <Box 
      as="li"
      display={{base: "list-item", md: "inline-block"}}
      m={{base: "0", md:"0 10px"}}
    >
      <PseudoBox
        as="a"
        cursor={{md: "pointer"}}
        onClick={handleActiveTab}
        id={tabId}
        color={{base: "#222222", md:"#f4f4f4"}}
        pos="relative"
        overflow="hidden"
        display="block"
        transition="all .3s"
        fontWeight={{md: "300"}}
        opacity={{ md: activeTab === tabId ? "1" : "0.85 "}}
        borderBottom={{md: activeTab === tabId ? "1px solid #f4f4f4" : "none"}}
        p={{
          base: activeTab === tabId && !activeFilter ? "0 42px 0 54px" : activeFilter ? "0 62px" : "0",
          md: "0 0 3px"
        }}
        h={{
          base: activeTab === tabId ? "50px" : activeFilter ? "56px" : "0",
          md: "unset"
        }}
        lineHeight={{
          base: activeTab === tabId && !activeFilter ? "50px" : activeFilter ? "56px" : "0",
          md: "unset"
        }}
        fontSize={{
          base: activeTab === tabId && !activeFilter ? "16px" : activeFilter ? "28px" : "0",
          md: "16px"
        }}
        backgroundImage={{
          base: activeTab === tabId && !activeFilter ? `url(${ArrowIconDown})` : "none",
          md: "none"
        }}
        backgroundRepeat="no-repeat"
        backgroundPosition="calc(100% - 20px) center"
      >
        {label}
      </PseudoBox>
    </Box>
  )
}

export default () => {
  const [ activeFilter, setActiveFilter ] = useState(false)
  const [ activeTab, setActiveTab ] = useState("tab-1");

  const handleActiveTab = e => {
    setActiveTab(e.target.id)
  }
  
  return (
    <Box
      onClick={()=> setActiveFilter(!activeFilter)}
      top="20px"
      m={{
        base: "0",
        md: "100px 0 0",
        lg: "130px 0 0"
      }}
      p="0"
      mb={{md: "-150px"}}
      pb={{md: "50px"}}
      backgroundColor={{
        base: "#f4f4f4",
        md: "transparent"
      }}
      borderRadius={{
        base: "25px",
        md: "0px"
      }}
      pos={{
        base: "fixed",
        md: "unset"
      }}
      cursor={{
        base: "pointer",
        md: "auto"
      }}
      z-index="2"
    >
      <Avatar 
        name="Adin Jesuha"
        src={AvatarImage}
        display={{
          base: "block",
          md: "none"
        }}
        w="44px" 
        h="44px" 
        m="3px" 
        bg="none"
        pos="absolute"
        top="0"
        left="0"
        opacity={{baser: activeFilter ? "0" : "1", md: "unset"}}
        transform={{base: activeFilter ? "scale(.5)" : "scale(1)", md: "unset"}}
        transition="all .3s"
        zIndex="10"
      />
      <CustomPseudoBox
        as="ul"
        maxH="90vh"
        maxW="90vw"
        overflow="hidden"
        boxSizing="border-box"
        overflow="scroll"
        transition="padding .3s"
        m="0"
        ml={{md: "-10px"}}
        p={{base: activeFilter ? "0 0 20px" : "0", md: "0"}}
        _after={{
          content: '""',
          background: "#e5e5e5",
          display: "block",
          position: "absolute",
          top: "50px",
          left: "0",
          width: "100%",
          height: activeFilter ? "1px" : "0",
          transition: "height .3s",
        }}
        _before={{
          content: '"Filter Content"',
          color: "#222222 !important",
          lineHeight: "50px",
          fontSize: "16px",
          padding: "0 25px 0 60px",
          transition: "all .3s",
          overflow: "hidden",
          display: "block",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          backgroundImage: `url(${CloseIcon})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "15px",
          backgroundSize: activeFilter ? "21px" : "0px",
          height:activeFilter ? "50px" : "0",
          width: activeFilter ? "auto" : "0",
        }}
      >
      {tabs.map(tab => (
        <TabItem 
          key={tab.index}
          label={tab.label}
          tabId={tab.tabId}
          handleActiveTab={handleActiveTab}
          activeTab={activeTab}
          activeFilter={activeFilter}
        />
      ))}
      </CustomPseudoBox>
    </Box>
  )
}

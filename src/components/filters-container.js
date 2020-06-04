import React, { useState } from 'react'
import { Box, Avatar, PseudoBox } from '@chakra-ui/core'

import AvatarImage from '../images/avatar.png'
import ArrowIconDown from '../images/mobile-filter-down-arrow.svg'
import CloseIcon from '../images/mobile-filter-close.svg'


export default () => {
  const [ activeFilter, setActiveFilter ] = useState(false)
  const [ activeTab, setActiveTab ] = useState("tab-1");

  const handleActiveTab = e => {
    setActiveTab({activeTab: e.target.id})
    console.log(activeTab)
    console.log(activeTab.activeTab === "tab-1")
  }
  
  return (
    <Box
      onClick={()=> setActiveFilter(!activeFilter)}
      pos="fixed"
      top="20px"
      m="0"
      p="0"
      cursor="pointer"
      backgroundColor="#f4f4f4"
      borderRadius="25px"
      color="#222222"
      z-index="2"
    >
      <Avatar 
        name="Adin Jesuha"
        src={AvatarImage} 
        w="44px" 
        h="44px" 
        m="3px" 
        bg="none"
        pos="absolute"
        top="0"
        left="0"
        opacity={activeFilter ? "0" : "1"}
        transform={activeFilter ? "scale(.5)" : "scale(1)"}
        transition="all .3s"
      />
        <PseudoBox
          as="ul"
          listStyleType="none"
          maxH="90vh"
          overflow="hidden"
          boxSizing="border-box"
          transition="padding .3s"
          m="0"
          p={activeFilter ? "0 0 20px" : "0"}
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
          <Box 
            as="li"
          >
            <Box 
              as="a"
              onClick={handleActiveTab}
              id="tab-1"
              color="#222222"
              pos="relative"
              overflow="hidden"
              display="block"
              transition="all .3s"
              // Toggle styles
              p={activeTab.activeTab === "tab-1" || activeFilter ? "0 42px 0 54px" : "0"}
              h={activeTab.activeTab === "tab-1" ? "50px" : activeFilter ? "56px" : "0"}
              lineHeight={activeTab.activeTab === "tab-1" && !activeFilter ? "50px" : activeFilter ? "56px" : "0"}
              fontSize={activeTab.activeTab === "tab-1" && !activeFilter ? "16px" : activeFilter ? "30px" : "0"}
              backgroundImage={activeTab.activeTab === "tab-1" && !activeFilter ? `url(${ArrowIconDown})` : "none"}
              backgroundRepeat="no-repeat"
              backgroundPosition="calc(100% - 20px) center"
            >
              All
            </Box>
          </Box>
          <Box 
            as="li"
          >
            <Box 
              as="a"
              onClick={handleActiveTab}
              id="tab-2"
              color="#222222"
              pos="relative"
              overflow="hidden"
              display="block"
              transition="all .3s"
              // Toggle styles
              p={activeTab.activeTab === "tab-2" || activeFilter ? "0 42px 0 54px" : "0"}
              h={activeTab.activeTab === "tab-2" ? "50px" : activeFilter ? "56px" : "0"}
              lineHeight={activeTab.activeTab === "tab-2" && !activeFilter ? "50px" : activeFilter ? "56px" : "0"}
              fontSize={activeTab.activeTab === "tab-2" && !activeFilter ? "16px" : activeFilter ? "30px" : "0"}
              backgroundImage={activeTab.activeTab === "tab-2" && !activeFilter ? `url(${ArrowIconDown})` : "none"}
              backgroundRepeat="no-repeat"
              backgroundPosition="calc(100% - 20px) center"
            >
              Web Design
            </Box>
          </Box>
          <Box 
            as="li"
          >
            <Box 
              as="a"
              onClick={handleActiveTab}
              id="tab-3"
              color="#222222"
              pos="relative"
              overflow="hidden"
              display="block"
              transition="all .3s"
              // Toggle styles
              p={activeTab.activeTab === "tab-3" || activeFilter ? "0 42px 0 54px" : "0"}
              h={activeTab.activeTab === "tab-3" ? "50px" : activeFilter ? "56px" : "0"}
              lineHeight={activeTab.activeTab === "tab-3" && !activeFilter ? "50px" : activeFilter ? "56px" : "0"}
              fontSize={activeTab.activeTab === "tab-3" && !activeFilter ? "16px" : activeFilter ? "30px" : "0"}
              backgroundImage={activeTab.activeTab === "tab-3" && !activeFilter ? `url(${ArrowIconDown})` : "none"}
              backgroundRepeat="no-repeat"
              backgroundPosition="calc(100% - 20px) center"
            >
              Open Source Projects
            </Box>
          </Box>
        </PseudoBox>
    </Box>
  )
}

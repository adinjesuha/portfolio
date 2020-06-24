import React from 'react'
import { Box, PseudoBox } from '@chakra-ui/core'

import ArrowIconDown from '../../images/mobile-filter-down-arrow.svg'

const TabItem = ({tabId, label, handleActiveTab, activeTab, activeFilter}) => (
  <Box 
    as="li"
    display={{base: "block", md: "inline-block"}}
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
      opacity={{ md: activeTab === tabId ? "1" : "0.85 "}}
      borderBottom={{md: activeTab === tabId ? "1px solid #f4f4f4" : "1px solid transparent"}}
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

export default TabItem
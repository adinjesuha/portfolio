import React from 'react'
import { Box, Avatar, PseudoBox } from '@chakra-ui/core'

import AvatarImage from '../../images/avatar.png'
import CloseIcon from '../../images/mobile-filter-close.svg'
import ArrowIconDown from '../../images/mobile-filter-down-arrow.svg'

import { filterOptions } from './filters-options'

const Item = ({tabId, label, handleActiveTab, activeTab, activeFilter}) => (
  <Box 
    as="li"
    display="block"
    m="0"
  >
    <PseudoBox
      as="a"
      onClick={handleActiveTab}
      id={tabId}
      color="#222222"
      pos="relative"
      overflow="hidden"
      display="block"
      transition="all .3s"
      opacity={ activeTab === tabId ? "1" : "0.85 "}
      p={ 
        activeTab === tabId && !activeFilter ? "0 42px 0 54px" : 
        activeFilter ? "0 62px" : "0"
      }
      h={
        activeTab === tabId ? "50px" : activeFilter ? "56px" : "0"
      }
      lineHeight={
        activeTab === tabId && !activeFilter ? "50px" : activeFilter ? "56px" : "0"
      }
      fontSize={ 
        activeTab === tabId && !activeFilter ? "16px" : activeFilter ? "28px" : "0"
      }
      backgroundImage={ 
        activeTab === tabId && !activeFilter ? `url(${ArrowIconDown})` : "none"
      }
      backgroundRepeat="no-repeat"
      backgroundPosition="calc(100% - 20px) center"
    >
      {label}
    </PseudoBox>
  </Box>
)

const FilterTabFixed = ({handleActiveFilter, activeFilter, handleActiveTab, activeTab, translateEl}) => (
  <Box
    onClick={handleActiveFilter}
    display={{base: "none", md: "block"}}
    m="0"
    p="0"
    mb="-80px"
    backgroundColor="#f4f4f4"
    borderRadius="25px"
    pos="fixed"
    left={{md: "10px", lg: "30px"}}
    top="30px"
    cursor="pointer"
    zIndex="2"
    transform={
      !translateEl 
        ? "translate3d(calc((100% + 30px)*-1),0,0)" 
        : "translate3d(0,0,0)"
    }
    transition="transform .3s"
  >
    <Avatar 
      name="Adin Jesuha"
      src={AvatarImage}
      display="block"
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
      zIndex="10"
    />
    <PseudoBox
      as="ul"
      maxH="90vh"
      maxW="90vw"
      boxSizing="border-box"
      overflow={activeFilter ? "scroll" : "hidden"}
      transition="padding .3s"
      m="0"
      p={ activeFilter ? "0 0 20px" : "0"}
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
    {filterOptions.map(tab => (
      <Item 
        key={tab.index}
        label={tab.label}
        tabId={tab.tabId}
        handleActiveTab={handleActiveTab}
        activeTab={activeTab}
        activeFilter={activeFilter}
      />
    ))}
    </PseudoBox>
  </Box>
)

export default FilterTabFixed
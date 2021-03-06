import React from 'react'
import { Box, Avatar, PseudoBox } from '@chakra-ui/core'
import styled from '@emotion/styled'

import AvatarImage from '../../images/avatar.png'
import CloseIcon from '../../images/mobile-filter-close.svg'
import TabItem from './filters-item'

import { filterOptions } from './filters-options'

const CustomPseudoBox = styled(PseudoBox)`
  @media (min-width: 48em){
    &:after{
      content: none;
    }
    &:before{
      content: none;
    }
  }
`

const FilterTab = ({handleActiveFilter, activeFilter, handleActiveTab, activeTab, refProp}) => (
  <Box
    ref={refProp}
    onClick={handleActiveFilter}
    top="20px"
    m={{
      base: "0",
      md: "50px 0 0",
      xl: "130px 0 0"
    }}
    p="0"
    mb={{md: "-80px", lg:"-40px", xl: "-200px"}}
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
    zIndex="2"
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
      opacity={{base: activeFilter ? "0" : "1", md: "unset"}}
      transform={{base: activeFilter ? "scale(.5)" : "scale(1)", md: "unset"}}
      transition="all .3s"
      zIndex="10"
    />
    <CustomPseudoBox
      as="ul"
      maxH="90vh"
      maxW="90vw"
      boxSizing="border-box"
      overflow={activeFilter ? "scroll" : "hidden"}
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
    {filterOptions.map((tab, index) => (
      <TabItem 
        key={index}
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

export default FilterTab
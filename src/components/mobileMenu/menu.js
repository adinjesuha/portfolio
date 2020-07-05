import React from 'react'
import { Box, Flex, PseudoBox } from '@chakra-ui/core'
import { PopupText } from 'react-calendly'

import { getCurrentDate } from '../../utils/currentDate'
import PinIcon from '../../images/location-pin.svg'

const MenuItem = ({children, href, ...otherProps}) => (
  <Box as="li">
    <PseudoBox 
      as="a" 
      href={href}
      fontWeight="400"
      fontSize="26px"
      lineHeight="1.22"
      color="var(--text-color)"
      display="block"
      padding="10px 0"
      opacity=".85"
      transition="opacity .3s"
      {...otherProps}
      _hover={{
        opacity: 1,
      }}
    >
      {children}
    </PseudoBox> 
  </Box>
)

export default ({menuOpened}) => {
  return (
    <Flex
      flexDir="column"
      backgroundColor="#111517"
      h="100%"
      w="100%"
      pos="fixed"
      top="0"
      right="0"
      left="0"
      visibility={menuOpened ? "visible" : "hidden"}
      opacity={menuOpened ? "1" : "0"}
      transition="opacity .3s ease,visibility .3s ease"
      zIndex="docked"
    >
      <Box 
        as="nav"
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        p="12vh 0 10vh"
        h="100%"
        textAlign="center"
      >
        <Box
          as="ul"
          listStyleType="none"
          m="0"
          p="0"
          transition="opacity .3s ease-in"
          opacity="0"
          className={menuOpened ? "showNav--main" : ""}
        >
          <PopupText 
            text="Book an Appointment"
            url="https://calendly.com/adinjesuha"
          />
          <MenuItem 
            href="mailto:adinjesuha@gmail.com"
            target="_blank"
          >
            adinjesuha@gmail.com
          </MenuItem>
          <MenuItem
            href="tel:504-9579-8520"
          >
            Text (504) 9579-8520
          </MenuItem>
        </Box>
        <Box
          opacity="0"
          transition= "opacity .3s ease-in"
          className={menuOpened ? "showNav--alter" : ""}
        >
          <Box 
            as="span"
            display="block"
            opacity=".5"
            fontSize="16px"
            p="10px 0"
          >
            Current Location:
          </Box>
          <Box 
            as="span"
            display="block"
            fontSize="22px"
          >
            <Box 
              as="span"
              display="inline-block"
              w="20px"
              h="16px"
              mr="5px"
              backgroundImage={`url(${PinIcon})`}
              backgroundRepeat="no-repeat"
              backgroundPosition="center center"
            />
            Tegucigalpa, Honduras
          </Box>
          <Box
            fontSize="22px"
          > {getCurrentDate()} CST</Box>
          <PseudoBox
            _before={{
              content: '""',
              background:"#95cd71",
              display: "inline-block",
              width: "10px",
              height: "10px",
              borderRadius: "50%",
              marginRight: "10px",
            }}
          >
            <Box
              as="span"
              display="inline-block"
              opacity=".5"
              fontSize="16px"
              p="10px 0"
            >
              Available for Freelance (In office till 18:00)
            </Box>
          </PseudoBox>
        </Box>
      </Box>
    </Flex>
  )
}

import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Box, Flex } from '@chakra-ui/core'

import MobileToggle from './mobileMenu/toggleMenu'
import Header from './header'
import Footer from './footer'
import Image from './image'

import "./styles.css"

const Layout = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isScrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        if (!isScrolling) {
          setScrolling(true)
        }
      } else if (isScrolling) {
        setScrolling(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [isScrolling])
  
  const isActive = isScrolling ? "isScrolling" : ""

  return(
    <React.Fragment>
      <Box
        pos= "fixed"
        top="0"
        left="0"
        w="100%"
        h="100vh"
        zIndex="-1"
        transition="opacity 2s"
        className={`${isActive}`}
      >
        <Image imgName="bg-page.jpg" className="hero-image"/>
      </Box>
      <Box
        p={{base:"15px 15px 20px", lg:"30px 40px 60px", xl: "60px 80px 120px"}}
        m="0 auto"
        maxW="1600px"
      >
        <Box
          display={{sm:"block", lg:"none"}}
          pos="fixed"
          top="18px"
          right="23px"
          zIndex="sticky"
        >
          <MobileToggle 
            menuOpened={menuOpened} 
            setMenuOpened={setMenuOpened}
          />
        </Box>
        <Flex
          flexDir="column"
          justify="space-between"
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
            ml="30px"
            pt="1.875rem"
          >
            <Box
              as="ul"
              listStyleType="none"
              p="0"
              m="0 0 1.625rem"
              transition="opacity .3s ease-in"
              opacity="0"
              className={menuOpened ? "showNav" : ""}
            >
              <Box as="li">
                <Box 
                  as="a" 
                  href="#"
                  fontWeight="700"
                  fontSize="32px"
                  textTransform="uppercase"
                  lineHeight="1.22"
                  color="#fff"
                >
                  Item #1
                </Box> 
              </Box>
              <Box as="li">
                <Box 
                  as="a" 
                  href="#"
                  fontWeight="700"
                  fontSize="32px"
                  textTransform="uppercase"
                  lineHeight="1.82"
                  color="#fff"
                >
                  Item #2
                </Box> 
              </Box>
              <Box as="li">
                <Box 
                  as="a" 
                  href="#"
                  fontWeight="700"
                  fontSize="32px"
                  textTransform="uppercase"
                  lineHeight="1.22"
                  color="#fff"
                >
                  Item #1
                </Box> 
              </Box>
            </Box>
          </Box>
        </Flex>
        <Header />
        <main>{children}</main>
        <Footer />
      </Box>
    </React.Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

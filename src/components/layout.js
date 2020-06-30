import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import { Box } from '@chakra-ui/core'

import MobileToggle from './mobileMenu/toggleMenu'
import MobileMenu from './mobileMenu/menu'
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
        <MobileMenu menuOpened={menuOpened} />
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

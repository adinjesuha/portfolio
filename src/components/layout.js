import React, { useState } from "react"
import PropTypes from "prop-types"
import { PseudoBox, Box } from '@chakra-ui/core'

import { useEventListener } from '../hooks/useEventListener'
import MobileToggle from './mobileMenu/toggleMenu'
import Header from './header'
import Footer from './footer'
import BgImage from '../images/bg-small-1.jpg'

import "./styles.css"

const Layout = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isScrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      if (!isScrolling) {
        setScrolling(true)
      }
    } else if (isScrolling) {
      setScrolling(false)
    }
  }

  useEventListener(window, 'scroll', handleScroll);
  
  const isActive = isScrolling ? "isScrolling" : ""

  return(
    <React.Fragment>
      <PseudoBox
        pos= "fixed"
        top="0"
        left="0"
        w="100%"
        h="100vh"
        backgroundImage={`url(${BgImage})`}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        zIndex="-1"
        transition="filter .5s,opacity 3s"
        className={`${isActive}`}
        _before={{
          content: '""',
          backgroundImage: "radial-gradient(rgba(0,0,0,.0), rgba(0,0,0,0))",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: "-1",
        }}
        _after={{
          content: '""',
          backgroundImage: "linear-gradient(180deg,rgba(0,0,0,.0) 0%, rgba(0,0,0,0) 100%)",
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "80vh",
          zIndex: "-1",
        }}
      />
      <Box
        p={{base:"15px 15px 20px", lg:"30px 40px 60px", xl: "60px 80px 120px"}}
        m="0 auto"
        maxW="1600px"
      >
        <Box
          display={{sm:"block", lg:"none"}}
          pos="fixed"
          top="18px"
          right="18px"
          zIndex="docked"
        >
          <MobileToggle 
            menuOpened={menuOpened} 
            setMenuOpened={setMenuOpened}
          />
        </Box>
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

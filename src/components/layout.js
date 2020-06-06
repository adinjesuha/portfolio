import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Box } from '@chakra-ui/core'

import MobileToggle from './mobileMenu/toggleMenu'
import Header from './header'
import Footer from './footer'
import BgImage from '../images/bg-small-1.jpg'

const Layout = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened( menuOpened => !menuOpened);
    window.addEventListener('scroll', setMenuOpened);
    return () => window.removeEventListener('scroll', setMenuOpened);
  }, []);
  return(
    <React.Fragment>
      <Box
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
      />
      <Box
        color="#f4f4f4"
        p={{base:"15px 15px 20px", lg:"30px 40px 60px", xl: "60px 80px 120px"}}
        m="0 auto"
        maxW="1600px"
      >
        <Box
          display={{sm:"block", lg:"none"}}
          pos="fixed"
          top="18px"
          right="18px"
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

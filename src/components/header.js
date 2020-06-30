import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Box, Avatar, Flex, Heading, Text, PseudoBox } from '@chakra-ui/core'
import ReactRotatingText from 'react-rotating-text'

import CalendlyLinkCta from './calendly-cta'
import AvatarImage from '../images/avatar.png'
import Logo from '../images/adin-jesuha.png'
import PinIcon from '../images/location-pin.svg'

const Header = () => {
  const [ date, setDate ] = useState({
    hours: new Date().getHours().toLocaleString(),
    minutes: new Date().getMinutes().toLocaleString(),
  })
  return (
    <React.Fragment>
      <Flex justifyContent="space-between">
        <Box
          as={Link}
          to="/"
          display={{base:"none", md:"flex"}}
          alignItems="center"
        >
          <Avatar 
            name="Adin Jesuha" 
            src={AvatarImage} 
            size="md" 
            w="44px"
            h="44px"
            mr="12px" 
            bg="none"
          />
          <img src={Logo} alt='Adin Jesuha' width="125px" />
        </Box>
        <CalendlyLinkCta />
      </Flex>
      <Flex justifyContent="space-between"> 
        <Box
          maxW= {["400px", "500px", "550px", "600px"]}
          mt={{base: "40vh", xl:"55px"}}
        >
          <Text 
            fontSize="xs"
            letterSpacing="0.1px"
            fontWeight="500"
            mb="0.48rem"
            textTransform="uppercase"
          >
            i build {" "}
            <ReactRotatingText items={['websites', 'webapps', 'user interfaces', 'Prototypes']} />
          </Text>
          <Heading
            fontSize={["30px", "44px", null, "48px"]}
            fontWeight="500"
          >I’m an entrepreneur JAMStack developer</Heading>
          <Text
            mt="25px"
            opacity="0.85"
            letterSpacing= ".5px"
            lineHeight="1.5em"
          >I help companies simplify their digital experiences by creating high-performance products, serverless and progressive web applications.</Text>
        </Box>
        <Box
          display={{base:"none", lg:"block"}}
          letterSpacing="0.5px"
          textAlign="right"
          fontSize="22px"
          mt="60px"
        >
          <Box
            as="span"
            display="block"
            opacity=".85"
            fontSize="16px"
            lineHeight="2.25em"
          >
            Current Location:
          </Box>
          <Box
            as="span"
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
            as="span"
            pl=".35em"
          > {date.hours}:{date.minutes} CST</Box>
          <PseudoBox
            fontSize="md"
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
              opacity=".75"
              lineHeight="2.25em"
            >
            Available for Freelance (In office till 18:00)
            </Box>
          </PseudoBox>
        </Box>
      </Flex>
      <Box
        display={{base:"none", lg:"block"}}
        mt="40px"
      >
        <PseudoBox
          as="a"
          href="mailto:adinjesuha@gmail.com"
          target="_blank"
          display="inline-block"
          backgroundColor="#f4f4f4"
          borderRadius="25px"
          px="30px"
          mr="30px"
          textDecoration="none"
          color="#222222"
          lineHeight="50px"
          transition= "background .3s,color .3s"
          _hover={{
            background: "#222222",
            color: "#f4f4f4"
          }}
        >adinjesuha@gmail.com</PseudoBox>
        <Box
          as="a"
          href="tel:504-9579-8520"
          display="inline-block"
          textDecoration="none"
          color="#f4f4f4"
          lineHeight="50px"
        >Text (504) 9579-8520</Box>
      </Box>
    </React.Fragment>
  )
}

export default Header
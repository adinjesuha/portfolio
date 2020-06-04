import React from 'react'
import { Link } from 'gatsby'
import { Box, Avatar, Flex, Heading, Text, PseudoBox } from '@chakra-ui/core'

import AvatarImage from '../images/avatar.png'
import SocialMedia from './social-media'

const Header = () => (
  <React.Fragment>
    <Flex justifyContent="space-between">
      <Box
        as={Link}
        to="/"
        display={{base:"none", lg:"flex"}}
        alignItems="center"
      >
        <Avatar name="Adin Jesuha" src={AvatarImage} size="md" mr="12px" bg="none"/>
        <span>Adin Jesuha.</span>
      </Box>
      <SocialMedia />
    </Flex>
    <Flex
      justifyContent="space-between"
    >
      <Box
        maxW= {{base:"400px", lg:"600px"}}
        mt={{base: "50vh", lg:"40vh", xl:"55px"}}
      >
        <Heading
          fontSize={["30px", "44px", null, "48px"]}
          fontWeight="300"
        >
          Designing websites / apps for companies like Google
        </Heading>
        <Text
          mt="25px"
          opacity="0.85"
          letterSpacing= ".5px"
          lineHeight="1.5em"
          fontSize="16"
          fontWeight="300"
        >If you’re looking for a freelance designer to help bring an idea to life and you’re on a tight timeline—let’s jam.</Text>
      </Box>
      <Box
        display={{base:"none", lg:"block"}}
        letterSpacing="0.5px"
        textAlign="right"
        fontSize="22px"
        fontWeight="lighter"
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
          Tegucigalpa, Honduras
        </Box>
        <Box
          as="span"
          pl=".35em"
        >
          11:39 AM CDT 
        </Box>
        <Box
          as="span"
          display="block"
          opacity=".85"
          fontSize="16px"
          lineHeight="2.25em"
        >
          (in office till 6)
        </Box>
      </Box>
    </Flex>
    <Box
      display={{base:"none", lg:"block"}}
      mt="40px"
    >
      <PseudoBox
        as="a"
        href="#"
        target="_blank"
        display="inline-block"
        backgroundColor="#f4f4f4"
        borderRadius="25px"
        px="30px"
        mr="30px"
        textDecoration="none"
        fontWeight="300"
        color="#222222"
        lineHeight="50px"
        transition= "background .3s,color .3s"
        _hover={{
          background: "#222222",
          color: "#f4f4f4"
        }}
      >hey@adinjesuha.com</PseudoBox>
      <Box
        as="a"
        href="#"
        display="inline-block"
        textDecoration="none"
        fontWeight="300"
        color="#f4f4f4"
        lineHeight="50px"
      >(504) 9579-8520</Box>
    </Box>
    <PseudoBox
      mt="20px"
      fontSize="12px"
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
        opacity="0.85"
        fontWeight="lighter"
      >Available for Freelance / Social Promotion / Speaking Engagements</Box>
    </PseudoBox>
  </React.Fragment>
)

export default Header
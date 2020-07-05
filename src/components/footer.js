import React from 'react'
import { Box, PseudoBox, Text } from '@chakra-ui/core';

const Footer = () => {
  return (
    <Box
      as="footer"
      my="60px"
    >
      <PseudoBox
        fontSize={{base: "2xl", lg: "4xl"}}
        mt="20px"
        maxW="600px"
        pl={{base: "22px", lg:"26px"}}
        pos="relative"
        _before={{
          content: '""',
          width: "14px",
          height: "14px",
          position: "absolute",
          top: "calc(50% - 7px)",
          left: 0,
          background: "#9cd976",
          borderRadius: "50%",
        }}
      >
        Available for Freelance
      </PseudoBox>
      <Text
        mt="25px"
        opacity=".85"
        letterSpacing=".5px"
        lineHeight="1.5em"
        maxW="600px"
      >
        If you have a project in mind and need a freelancer—let’s jam.
      </Text>
      <Box
        textAlign="center"
        pt="30px"
        float={{sm:"left"}}
        clear={{sm:"left"}}
      >
        <PseudoBox
          as="a"
          href="mailto:adinjesuha@gmail.com"
          target="_blank"
          display={{base:"block", sm:"inline-block"}}
          mr={{sm: "15px"}}
          mb={{base: "15px", sm: "0"}}
          backgroundColor="#f4f4f4"
          borderRadius="25px"
          p="0 30px"
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
          display={{base:"block", sm:"inline-block"}}
          textDecoration="none"
          color="#f4f4f4"
          lineHeight="50px"
        >Text (504) 9579-8520</Box>
      </Box>
    </Box>
  )
}

export default Footer;
import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';

const SectionContainer = styled.div`
  min-height: 100vh;
  min-width: 320px;
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 5em 1em;
  scroll-behavior: smooth;
`;

const Heading = styled.h2`
  text-align: ${props => props.align || "left"};
`

const Container = ({ children }) => <SectionContainer>{children}</SectionContainer>;

const Header = ({ name, align }) => (
  <Reveal effect="fadeInUp">
    <Heading align={align}>{name}</Heading>
  </Reveal>
);

export default {
  Container,
  Header,
};
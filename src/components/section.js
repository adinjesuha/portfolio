import React from 'react';
import styled from 'styled-components';
import Reveal from 'react-reveal/Reveal';
import { device } from '../utils/brakpoints'

const SectionContainer = styled.div`
  max-width: 1366px;
  display: flex;
  margin: auto;
  flex: 0 1 auto;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 8rem;
  scroll-behavior: smooth;
  &:first-child{
    min-height: 100vh;
  }
  @media ${device.tablet}{
    padding-bottom: 15rem;
    &:first-child{
      padding-top: 10rem;
    }
  }
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
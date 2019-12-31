import React from 'react';
import styled from 'styled-components';
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
    padding-top: 25rem;
    padding-bottom: 20rem;
  }
  @media ${device.tablet}{
    padding-bottom: 15rem;
    &:first-child{
      padding-top: 15rem;
    }
  }
`;

const Heading = styled.h2`
  text-align: ${props => props.align || "left"};
`

const Container = ({ children }) => <SectionContainer>{children}</SectionContainer>;

const Header = ({ name, align }) => <Heading align={align}>{name}</Heading>;

export default {
  Container,
  Header,
};
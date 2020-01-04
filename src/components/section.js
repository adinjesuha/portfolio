import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/brakpoints'

const SectionContainer = styled.div`
  max-width: 1280px;
  margin: auto;
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  padding-bottom: 8rem;
  width: 100%;
  scroll-behavior: smooth;
  &:first-child:not(#thank-you){
    justify-content: center;
    min-height: calc(100vh - 100px);
    margin-bottom: 0;
  }
  @media ${device.laptop}{
    padding-bottom: 15rem;
    &:first-child:not(#thank-you){
      min-height: 100vh;
      justify-content: flex-end;
    }
  }
`;

const Heading = styled.h2`
  text-align: ${props => props.align || "left"};
`

const Container = ({ children, id }) => (
  <SectionContainer id={id}>{children}</SectionContainer>
)

const Header = ({ name, align }) => <Heading align={align}>{name}</Heading>;

export default {
  Container,
  Header,
};
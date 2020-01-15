import React from 'react';
import styled from 'styled-components';

import { device } from '../utils/brakpoints'

const SectionContainer = styled.div`
  background-color: ${({theme, bg}) => bg ? theme.background : 'transparent'};
  padding: 8rem 2rem;
  margin: auto;
  width: 100%;
  min-height: 100vh;
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-behavior: smooth;
  &:first-child{
    padding-top: 0;
    min-height:calc(100vh - 94px);
    @media ${device.tablet} {
      min-height: 100vh;
    }
  }
`;

const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  align-items: center;
  p{
    text-align: center;
    font-weight: 300;
    font-size: 2rem;
    line-height: 1.4;
  }
  strong{
    font-weight: 500;
  }
  @media ${device.tablet}{
    p{
      font-size: 2.4rem;
    }
  }
`

const Heading = styled.div`
  text-align: center;
  h2{
    text-transform: uppercase;
  }
`

const Container = ({ children, id, bg}) => <SectionContainer id={id} bg={bg}>{children}</SectionContainer>

const Header = ({ name, align, ...props }) => (
  <Heading align={align} {...props}>
    <h2>{name}</h2>
    <span className="separator" />
  </Heading>
)

const Content = ({children, ...props}) => <SectionContent {...props}>{children}</SectionContent>


export default {
  Container,
  Header,
  Content
};
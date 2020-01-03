import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/brakpoints'

const SectionContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: auto;
  flex: 0 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  padding-bottom: 8rem;
  scroll-behavior: smooth;
  &:first-child{
    justify-content: center;
    min-height: calc(100vh - 100px);
    margin-bottom: 0;
  }
  @media ${device.laptopL}{
    padding-bottom: 15rem;
    &:first-child{
      justify-content: flex-end;
      padding-top: 15rem;
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
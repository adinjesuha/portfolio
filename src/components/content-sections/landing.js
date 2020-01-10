import React from 'react'
import styled from 'styled-components'
import TextLoop from "react-text-loop";

import Section from '../section'
import { device } from '../../utils/brakpoints'

const Content = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 0 auto;
  h1{
    font-weight: 300;
    font-size: 5.2rem;
    letter-spacing: -1px;
    text-align: center;
    line-height: 1.2;
    margin: 0;
    overflow: hidden;
    width: 100%;
    span{
      display: block;
      &:last-child{
        font-weight: 400;
      }
    }
  }
  h2{
    font-size: 2.2rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    text-align: center;
    line-height: 1.6;
  }
  .no-desktop-letters{
    display: inherit;
    font-weight: 500;
  }
  .desktop-letters{
    display: none;
    font-weight: 500;
  }
  @media ${device.tablet}{
    max-width: 128rem;
    h1{
      letter-spacing: -3px;
      font-size: 8rem;
      text-align: left;
      .no-desktop-letters{
        display: none;
      }
      .desktop-letters{
        display: inline-block;
      }
    }
    h2{
      display: inline-block;
      font-size: 3.8rem;
      text-align: left;
      max-width: 80rem;
    }
  }
`

const Landing = () => {
  return (
    <Section.Container>
      <Content>
        <h1>
          <span>Hola, soy Adin Jesuha</span>
          <span className="desktop-letters">
            <TextLoop>
              <span>Front-end dev</span>
              <span>JAMStack lover</span>
              <span>UI Designer</span>
            </TextLoop>
          </span>
          <span className="no-desktop-letters">Front-end dev</span>
        </h1>
        <span className="separator separator__primary"/>
        <h2>Ayudando a las empresas a simplificar sus experiencias digitales</h2>
      </Content>
    </Section.Container>
  )
}
export default Landing;
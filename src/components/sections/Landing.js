import React from 'react'
import styled from 'styled-components'
import TextLoop from "react-text-loop";
import {useSpring, animated} from 'react-spring'

import Section from '../section'
import { device } from '../../utils/brakpoints'

const H1 = styled.h1`
  font-weight: 300;
  font-size: 5.2rem;
  letter-spacing: -1px;
  line-height: 1.2;
  overflow: hidden;
  span{
    display: block;
    &:last-child{
      font-weight: 400;
    }
  }
  @media ${device.tablet}{
    letter-spacing: -3px;
    font-size: 8rem;
  }
`


const Landing = () => {
  const props = useSpring({ opacity: 1, from: {opacity: 0} })
  return (
    <Section.Container>
      <animated.div style={props}>
        <H1>
          <span>Hola, soy</span>
          <span>
            Adin Jesuha, {" "}
            <TextLoop>
              <span>Front-end dev</span>
              <span>JAMStack lover</span>
              <span>UI Designer</span>
            </TextLoop>
          </span>
        </H1>
      </animated.div>
    </Section.Container>
  )
}
export default Landing;
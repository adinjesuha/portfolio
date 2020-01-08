import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { device } from '../../utils/brakpoints'

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: calc(100vh - 16.5rem);
  @media ${device.tablet}{
    height: calc(100vh - 18.5rem);
  }
`

const Hero = styled.div`
  align-self: center;
  width: 100%;
  text-align: center;
  h1{
    font-size: 2.2rem;
    font-family: 'Playfair Display',sans-serif;
    font-weight: 400;
    line-height: 1.6;
    margin: 1.875rem auto;
    max-width: 580px;
    span{
      display: block;
    }
  }
  .button-wrapper{
    position: relative;
    a{
      display: inline-block;
    }
  }
  @media ${device.laptop}{
    h1{
      font-size: 3.2rem;
    }
  }
`

const ThankYou = () => {
  return (
    <Wrapper>
      <Hero>
        <h1>
          <span>Gracias por tu mensaje.</span>
          <span>Me pondre en contacto contigo pronto!</span>
        </h1>
        <div className="button-wrapper">
          <Link to="/" className="btn btn-primary btn--fixed-width">volver al inicio</Link>
        </div>
      </Hero>
    </Wrapper>
  )
}

export default ThankYou
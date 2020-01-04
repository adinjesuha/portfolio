import React from 'react'
import styled from 'styled-components'

import { device } from '../../utils/brakpoints'
import Section from '../section'
import Form from '../form/form'

const Wrapper = styled.div`
  padding-bottom: 10rem;
  max-width: 82rem;
  margin: 0 auto;
`

const H1 = styled.h1`
  font-weight: 300;
  text-align: center;
  line-height: 1.11;
  padding-bottom: 5rem;
  @media ${device.tablet}{
    letter-spacing: -1px;
    font-size: 6rem;
  }
`

const Contact = () => {
  return (
    <Section.Container id="contact">
      <Wrapper>
        <H1>Tienes algún proyecto en mente? Trabajemos juntos.</H1>
        <Form />
      </Wrapper>
    </Section.Container>
  )
}
export default Contact;
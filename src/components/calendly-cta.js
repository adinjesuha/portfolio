import React from 'react'
import { PopupText } from 'react-calendly'
import styled from '@emotion/styled'

const CalendlyLink = styled.div`
  display: none;
  margin: 0;
  padding: 0;
  align-items: center;
  @media (min-width: 62em){
    display: flex;
    > a{
      padding-left: 30px;
      padding-right: 30px;
      line-height: 44px;
      border-radius:25px;
      color: var(--post-bg-color);
      background: var(--text-color);
      transition: background .3s,color .3s;
      &:hover{
        background: var(--post-bg-color);
        color: var(--text-color);
      }
    }
  }
`

export default () => (
  <CalendlyLink>
    <PopupText 
      text="Book an Appointment"
      url="https://calendly.com/adinjesuha"
    />
  </CalendlyLink>
)
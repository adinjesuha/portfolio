import React from 'react'
import styled from '@emotion/styled'

const MailTo = styled.a`
  display: none;
  color: var(--text-color);
  text-decoration: none;
  position: fixed;
  top: 30px;
  right: 30px;
  background: var(--bg-color);
  border-radius: 25px;
  padding: 0 30px;
  line-height: 50px;
  transition: background .3s,color .3s,transform .6s;
  border: 2px solid var(--opacity-35);
  z-index: 2;
  box-shadow: 0 5px 10px rgba(0,0,0,.2);
  transform: ${props => props.translateEl ? "translate3d(0,0,0)" : "translate3d(calc(100% + 30px),0,0)"};
  &:hover{
    color: var(--bg-color);
    background: var(--text-color);
  }
  @media(min-width: 62em){
    display: block;
  }
`

export default ({translateEl}) => {
  return (
    <MailTo
      href="mailto:adinjesuha@gmail.com"
      target="_blank"
      translateEl={translateEl}
    >
      adinjesuha@gmail.com
    </MailTo>
  )
}

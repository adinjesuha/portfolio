import React from 'react'
import styled from 'styled-components'

const A = styled.a`
  font-weight: 400;
  letter-spacing: 0.089rem;
  position: relative;
  &:before, &:after{
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    height: 1px;
  }
  &:before{
    background-color: ${({theme}) => theme.card.underline};
  }
  &:after{
    right: 100%;
    background-color: ${({theme}) => theme.card.underlinAfter};
    transition: all .4s cubic-bezier(.215,.61,.355,1);
  }
  &:hover::after{
    right: 0;
  }
`

const ExternalLink = ({href, text}) => (
  <A 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    {text}
  </A>
)

export default ExternalLink;
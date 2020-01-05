import React from 'react'
import styled from 'styled-components'

import Image from './image'
import { logos } from '../config/siteData'

const ImageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 60rem;
  .gatsby-image-wrapper{
    width: 100%;
    margin: 0 -.1rem 1.55rem;
    opacity: .3;
    transform: scale(.75);
    filter: ${({theme}) => theme.filter};
    &:nth-child(1){
      max-width: 60px;
    }
    &:nth-child(2){
      max-width: 160px;
    }
    &:nth-child(3){
      max-width: 120px;
    }
    &:nth-child(4){
      max-width: 80px;
    }
    &:nth-child(5){
      max-width: 160px;
    }
    &:nth-child(6){
      max-width: 150px;
    }
    &:nth-child(7){
      max-width: 130px;
    }
  }
`

const Technologies = () => (
  <ImageBlock>{logos.map(({name, index}) => <Image imgName={name} key={index}/>)}</ImageBlock>
)

export default Technologies
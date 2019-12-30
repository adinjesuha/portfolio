import React from 'react'
import styled from 'styled-components'

import Section from '../section'
import Image from '../image'

const Content = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
`

const ImageBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  .gatsby-image-wrapper{
    width: 100%;
    margin: 0 -.1rem 1.55rem;
    opacity: .3;
    transform: scale(.75);
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

const Technologies = () => {
  return (
    <Section.Container>
      <Content>
        <Section.Header name="Stack de Tecnologías de desarrollo actual" align="center"/>
        <ImageBlock>
          <Image imgName="react.png" className="invert-filter"/>
          <Image imgName="gatsby.png" className="invert-filter"/>
          <Image imgName="nextjs.png" className="invert-filter"/>
          <Image imgName="graphql.png" className="invert-filter"/>
          <Image imgName="contentful.png" className="invert-filter"/>
          <Image imgName="firebase.png" className="invert-filter"/>
          <Image imgName="netlify.png" className="invert-filter"/>
        </ImageBlock>
      </Content>
    </Section.Container>
  )
}
export default Technologies;
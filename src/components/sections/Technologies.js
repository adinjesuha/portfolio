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

const Heading = styled.div`
  margin: 0 auto;
  text-align: center;
  * {
    font-weight: 400;
    &:first-child{
      opacity: 0.5;
      text-transform: uppercase;
    }
  }
`

const Technologies = () => {
  return (
    <Section.Container id="tech">
      <Content>
        <Heading>
          <h5>Tecnologías que utilizo</h5>
          <h3>Stack actual de desarrollo</h3>
        </Heading>
        <ImageBlock>
          <Image imgName="react.png"/>
          <Image imgName="gatsby.png"/>
          <Image imgName="nextjs.png"/>
          <Image imgName="graphql.png"/>
          <Image imgName="contentful.png"/>
          <Image imgName="firebase.png"/>
          <Image imgName="netlify.png"/>
        </ImageBlock>
      </Content>
    </Section.Container>
  )
}
export default Technologies;
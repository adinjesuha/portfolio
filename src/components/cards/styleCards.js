import styled from 'styled-components'

import { device } from '../../utils/brakpoints'

// Big Cards
export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 5rem auto;
  width: 100%;
  max-width: 128rem;
  &:last-child{
    margin-bottom: 0;
  }
  @media ${device.tablet}{
    flex-wrap: nowrap;
  }
`

export const ImageCard = styled.div`
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  align-items: center;
  height: 560px;
  margin-bottom: 3rem;
  position: relative;
  div{
    width: 100%;
    height: 100%;
    max-width: 460px;
  }
  @media ${device.tablet}{
    order: ${({order}) => order || 'initial'};
    flex: 0 0 45%;
  }
  @media ${device.tablet}{
    flex: 0 0 50%;
  }
`

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  text-align: center;
  max-width: 100%;
  padding: 0;
  margin:0 auto;
  .content-head{
    font-weight: 300;
  }
  .content-body{
    p{
      margin: 0;
      margin-bottom: 2rem;
      line-height: 1.4;
      color: ${({theme}) => theme.card.bodyText};
    }
    strong{
      font-weight: 500;
    }
  }
  .content-footer{
    span, a{
      font-size: 1.4rem;
      color: ${({theme}) => theme.card.footerText};
    }
  }
  @media ${device.tablet}{
    max-width: 560px;
    padding: 0 20px;
  }
  @media ${device.laptop}{
    max-width: 560px;
    padding: 0 40px;
  }
`
// Small Cards
export const OpenSourceSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 128rem;
  margin: 0 auto;
  margin: 5rem auto;
  h3{
    text-transform: uppercase;
    letter-spacing: 0.2rem;
    margin: 0;
  }
`

export const OpenSourceContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 2rem 0;
  @media ${device.mobileL}{
    flex-flow: row wrap;
  }
  @media ${device.tablet}{
  }
`

export const OpenSourceItem = styled.div`
  width: 100%;
  margin-bottom: 4rem;
  @media ${device.mobileL}{
    width: calc(50% - 1rem);
  }
  @media ${device.laptop}{
    width: calc(33.33% - 2rem);
  }
  @media ${device.tablet}{
    margin-bottom: 2rem;
  }
`

export const OpenSourceData = styled.div`
  width: 100%;
  margin-top: 1rem;
  display: flex;
  flex-flow: column wrap;
  h4{
    margin: 0;
  }
  p{
    font-size: 1.4rem;
  }
  p + p {
    margin: 0;
    margin-bottom: 1.5rem;
  }
  @media ${device.tablet}{
    margin-top: 2rem;
  }
`

export const OpenSourceImage = styled.a`
  display: inline-block;
  width: 100%;
  height: 260px;
  overflow: hidden;
  .image-box{
    width: 100%;
    height: 100%;
    background: yellow;
  }
  @media ${device.mobileL}{
    height: 150px;
    .image-box{
      background: red;
    }
  }
  @media ${device.tabletS}{
    height: 250px;
    box-shadow: 0 3px 6px 0 rgba(17,21,23,.06);
    .image-box{
      background: blue;
    }
  }
  @media ${device.tablet}{
    height: 300px;
    .image-box{
      background: green;
    }
  }
  @media ${device.laptop}{
    height: 280px;
    .image-box{
      background: purple;
    }
  }
`

export const BtnGroup = styled.div`
  display: inline-block;
  margin-top: 1rem;
  @media ${device.tablet}{
    margin-top: 2rem;
  }
`
export const BtnLink = styled.a`
  background: ${({theme, primary}) => primary ? `${theme.bgInvertedButton}` : 'transparent'};
  font-size: 1.2rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  text-align: center;
  border-radius: 0.2rem;
  border: 1px solid ${({theme}) => theme.bgInvertedButton};
  padding: 1rem 0 0.7rem;
  display: inline-block;
  color: ${({theme, primary}) => primary ? `${theme.txtInvertedButton}` : `${theme.title}`};
  width: 100%;
  span{
    display: inline-block;
    width: 1.5rem;
    vertical-align: middle;
    margin-right: 0.5rem;
    svg g{
      fill: ${({theme, primary}) => primary ? `${theme.txtInvertedButton}` : `${theme.title}`};
    }
  }
  &:first-child{
    margin-bottom: 1rem;
  }
  @media ${device.mobileL}{
    max-width: 9.5rem;
    &:first-child{
      margin-bottom: 0;
      margin-right: 1rem;
    }
  }
  @media ${device.tabletS}{
    max-width: 11rem;
    &:first-child{
      margin-right: 2rem;
    }
  }
`
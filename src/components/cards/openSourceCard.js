import React from 'react'
import styled from 'styled-components'

import {device} from '../../utils/brakpoints'
import Image from '../image'
import ExternalLink from '../styles/external-link'
import GithubIcon from '../svg/github'
import LinkIcon from '../svg/link'

const OpenSourceSection = styled.div`
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

const OpenSourceContent = styled.div`
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

const OpenSourceItem = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  @media ${device.mobileL}{
    width: calc(50% - 1rem);
  }
  @media ${device.laptop}{
    width: calc(33.33% - 2rem);
  }
`

const OpenSourceData = styled.div`
  width: 100%;
  margin-top: 2rem;
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
`
const BtnGroup = styled.div`
  display: inline-block;
  margin-top: 2rem;
`
const BtnLink = styled.a`
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

const OpenSourceImage = styled.a`
  display: inline-block;
  width: 100%;
  height: 280px;
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

const OpenSourceCard = () => {
  return (
    <OpenSourceSection>
      <h3>Open Source</h3>
      <OpenSourceContent>

        <OpenSourceItem>
          <OpenSourceImage href="https://mdx-blog-boilerplate.netlify.com/" target="_blank" rel="noopener noreferrer">
            <Image imgName="pw01.jpg" />
          </OpenSourceImage>
          <OpenSourceData>
            <h4>Blog Template</h4>
            <p>Blog template, de diseño minimalista y facil de customizar.</p>
            <p>Tech: <strong>Gatsby - MDX - Styled Components</strong></p>
            <BtnGroup>
              <BtnLink 
                href="https://mdx-blog-boilerplate.netlify.com/"
                target="_blank" 
                rel="noopener noreferrer"
                primary
              >
                <span>
                  <LinkIcon />
                </span>
                visitar
              </BtnLink>
              <BtnLink 
                href="https://github.com/adinjesuha/gatsby-blog"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>
                  <GithubIcon />
                </span>
                código
              </BtnLink>
            </BtnGroup>
          </OpenSourceData>
        </OpenSourceItem>

        <OpenSourceItem>
          <OpenSourceImage href="https://gatsby-dashboard-auth.netlify.com/" target="_blank" rel="noopener noreferrer">
            <Image imgName="pw02.jpg" />
          </OpenSourceImage>
          <OpenSourceData>
            <h4>Dashboard Template</h4>
            <p>Dashboard App con servicio de autenticación de usuarios y capacidades <ExternalLink href="http://es.wikipedia.org/wiki/CRUD" text="CRUD" />.</p>
            <p>Tech: <strong>Gatsby - Redux - Firebase & Firestore - Reactstrap</strong></p>
            <BtnGroup>
              <BtnLink 
                href="https://gatsby-dashboard-auth.netlify.com/"
                target="_blank" 
                rel="noopener noreferrer"
                primary
              >
                <span>
                  <LinkIcon />
                </span>
                visitar
              </BtnLink>
              <BtnLink 
                href="https://github.com/adinjesuha/auth-with-gatsby-fireebase"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>
                  <GithubIcon />
                </span>
                código
              </BtnLink>
            </BtnGroup>
          </OpenSourceData>
        </OpenSourceItem>

        <OpenSourceItem>
          <OpenSourceImage to="/">
            <Image imgName="pw03.jpg" />
          </OpenSourceImage>
          <OpenSourceData>
            <h4>Gatsby Ecommerce</h4>
            <p>Ecommerce template contruido con Gatsby, Hasura (GraphQL API) y Stripe.</p>
            <p>Tech: <strong>Gatsby - Hasura - Stripe - Auth0</strong></p>
            <h5>Proximamente</h5>
          </OpenSourceData>
        </OpenSourceItem>

      </OpenSourceContent>
    </OpenSourceSection>
  )
}

export default OpenSourceCard;
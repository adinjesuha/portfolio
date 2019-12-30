import React from 'react'
import styled from 'styled-components'
import { FaBan, FaLink, FaGithub } from 'react-icons/fa'

import Image from '../image'
import Section from '../section'
import { device } from '../../utils/brakpoints'

const Item = styled.div`
  display: flex;
  align-items: center;
  margin: 50px 0;
  transition: all .8s cubic-bezier(.165,.84,.44,1);
`

const ImageContent = styled.div`
  display: flex;
  flex: 0 0 100%;
  justify-content: center;
  align-items: center;
  order: ${({order}) => order || 'initial'};
  height: 560px;
  div{
    background: #000;
    width: 100%;
    height: 100%;
    max-width: 480px;
  }
  @media ${device.tablet}{
    flex: 0 0 50%;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  text-align: center;
  max-width: 560px;
  padding: 0 40px;
  margin:0 auto;
  .content-head{
    margin-bottom: 1rem;
    h2{
      margin: 0;
      margin-bottom: 1rem;
      font-weight: 300;
    }
  }
  .content-body{
    strong{
      font-weight: 500;
    }
  }
  .content-footer{
    span, a{
      color: var(--grey-500);
      font-size: 1.4rem;
    }
    a{
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
        background-color: rgba(4,40,37,.2);
      }
      &:after{
        right: 100%;
        background-color:#042825;
        transition: all .4s cubic-bezier(.215,.61,.355,1);
      }
      &:hover::after{
        right: 0;
      }
    }
  }
`

const Projects = () => {
  return (
    <Section.Container>
      <Section.Header name="Trabajos Recientes" />
        <Item>
          <ImageContent>
            <div>
              <Image imgName="wwwd01.jpg"/>
            </div>
          </ImageContent>
          <Content>
            <div className="content-head">
              <h2>AgroBioTek Internacional</h2>
              <span>Desarrollo web</span>
            </div>
            <div className="content-body">
              <p>Diseño y desarrollo del Landing Page para <strong>AgroBioTek Internacional</strong>, utilizando un stack de desarrollo moderno, <em>Jekyll</em> para generar los archivos estáticos, <em>Github Pages</em> para alojar los archivos directamente desde su repositorio privado en Github.</p>
            </div>
            <div className="content-footer">
              <span>Visitar el sitio web<a href="http://agrobiotek.com/" target="_blank"> agrobiotek.com</a></span>
            </div> 
          </Content>
        </Item>
        <Item>
          <ImageContent order="2">
            <div>
              <Image imgName="icon.png"/>
            </div>
          </ImageContent>
          <Content>
            <div className="content-head">
              <h2>Cámara hondureña de la leche CAHLE</h2>
              <span>Desarrollo web con JAMStack</span>
            </div>
            <div className="content-body">
              <p>Diseño y desarrollo del sitio web para la <strong>Cámara hondureña de la leche</strong>, utilizando JAMStack como arquitectura de desarrollo, <em>Gatsby</em> para generar los archivos estáticos, <em>Contentful</em> como CMS y <em>Netlify</em> para alojar los archivos directamente desde su repositorio privado en Github.</p>
            </div>
            <div className="content-footer">
              <span>Visitar el sitio web<a href="https://www.cahle.org/" target="_blank"> cahle.org</a></span>
            </div> 
          </Content>
        </Item>
    </Section.Container>
  )
}
export default Projects;
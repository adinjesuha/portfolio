import React from 'react'

import { Card, ImageCard, ContentCard  } from './styles'
import Image from '../image'

const ProjectCard = ({ title, imageName, children, order }) => {
  return (
    <Card>
      <ImageCard order={order}>
        <div>
          <Image imgName={imageName}/>
        </div>
      </ImageCard>
      <ContentCard>
        <h2 className="content-head">{title}</h2>
        <div className="content-body">
          {children}
        </div>
        <div className="content-footer">
          <span>Visitar el sitio web <a href="http://agrobiotek.com" target="_blank" rel="noopener noreferrer">agrobiotek.com</a></span>
        </div> 
      </ContentCard>
    </Card>
  )
}

export default ProjectCard;
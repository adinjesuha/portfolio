import React from 'react'

import { Card, ImageCard, ContentCard  } from './styles'
import Image from '../image'

const ProjectCard = ({ 
  title, 
  image, 
  inverted, 
  content, 
  descriptionLink,
  href,
  tag,
  wip
}) => {
  return (
    <Card>
      <ImageCard order={inverted && 2}>
        <Image imgName={image}/>
      </ImageCard>
      <ContentCard>
        <h3 className="content-head">{title}</h3>
        <div className="content-body">
          <p>{content}</p>
        </div>
        <div className="content-footer">
          <span>{descriptionLink} <a href={href} target="_blank" rel="noopener noreferrer">{tag}</a></span>
        </div> 
      </ContentCard>
    </Card>
  )
}

export default ProjectCard;
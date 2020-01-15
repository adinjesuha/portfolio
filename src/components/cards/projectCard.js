import React from 'react'

import { Card, ImageCard, ContentCard  } from './styleCards'
import Image from '../image'
import ExternalLink from '../styles/external-link'


const ProjectCard = ({ 
  title, 
  image, 
  inverted, 
  content, 
  descriptionLink,
  href,
  tag
}) => {
  return (
    <Card>
      <ImageCard order={inverted ? "2" : undefined}>
        <Image imgName={image}/>
      </ImageCard>
      <ContentCard>
        <h3 className="content-head">{title}</h3>
        <div className="content-body">
          <p>{content}</p>
        </div>
        <div className="content-footer">
          <span>{descriptionLink} 
            {" "}
            <ExternalLink href={href} text={tag}/>
          </span>
        </div> 
      </ContentCard>
    </Card>
  )
}

export default ProjectCard;
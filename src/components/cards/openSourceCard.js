import React from 'react'

import Image from '../image'
import GithubIcon from '../svg/github'
import LinkIcon from '../svg/link'
import { 
  OpenSourceSection, 
  OpenSourceContent, 
  OpenSourceItem,  
  OpenSourceImage,
  OpenSourceData,
  BtnGroup,
  BtnLink
} from './styleCards'
import { openSource } from '../../config/siteData'

const OpenSourceCard = () => {
  return (
    <OpenSourceSection>
      <h3>Open Source</h3>
      <OpenSourceContent>
      {openSource.map(({image, title, description, tech, upload, links}) => (
        <OpenSourceItem>
          <OpenSourceImage href={ upload ? links.web : null} target="_blank" rel="noopener noreferrer">
            <Image imgName={image} />
          </OpenSourceImage>
          <OpenSourceData>
            <h4>{title}</h4>
            <p>{description}</p>
            <p>Tech: <strong>{tech}</strong></p>
            {upload ? (
              <BtnGroup>
                <BtnLink href={links.web} target="_blank" rel="noopener noreferrer" primary>
                  <span><LinkIcon /></span>
                  visitar
                </BtnLink>
                <BtnLink href={links.github} target="_blank" rel="noopener noreferrer">
                  <span><GithubIcon /></span>
                  código
                </BtnLink>
              </BtnGroup>
            ) : (
              <h5>Proximamente</h5>
            )}
          </OpenSourceData>
        </OpenSourceItem>
      ))}
      </OpenSourceContent>
    </OpenSourceSection>
  )
}

export default OpenSourceCard;
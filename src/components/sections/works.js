import React from 'react'

import Section from '../section'
import ProjectCard from '../cards/projectCard'
import { works } from '../../config/siteData'

const Works = () => {
  return (
    <Section.Container id="works">
      <Section.Header name="Trabajos Recientes"/>
      {works.map(work => (
        <ProjectCard 
          key={work.index} 
          {...work}
        />
      ))}
    </Section.Container>
  )
}

export default Works;
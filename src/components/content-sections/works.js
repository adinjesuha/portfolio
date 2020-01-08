import React from 'react'

import Section from '../section'
import ProjectCard from '../cards/projectCard'
import OpenSourceCard from '../cards/openSourceCard'
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
      <OpenSourceCard />
    </Section.Container>
  )
}

export default Works;
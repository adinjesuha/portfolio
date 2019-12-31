import React from 'react'

import Section from '../section'
import ProjectCard from '../cards/projectCard'

const Projects = () => {
  return (
    <Section.Container>
      <Section.Header name="Trabajos Recientes" />

        <ProjectCard
          title="AgroBioTek Internacional"
          imageName="wwd01.jpg"
        >
          <p>Diseño y desarrollo del Landing Page para <strong>AgroBioTek Internacional</strong>.</p>
        </ProjectCard>

        <ProjectCard
          title="Cámara hondureña de la leche CAHLE"
          imageName="wwd01.jpg"
          order="2"
        >
          <p>Diseño y desarrollo del sitio web para la <strong>Cámara hondureña de la leche</strong>, utilizando JAMStack como arquitectura de desarrollo.</p>
        </ProjectCard>

    </Section.Container>
  )
}

export default Projects;
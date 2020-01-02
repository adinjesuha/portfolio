import React from 'react'

import Section from '../section'
import ProjectCard from '../cards/projectCard'

const dataWorks = [
  {
    index: 0,
    title: "AgroBioTek Internacional",
    image: 'wwd01.jpg',
    content: `Diseño y desarrollo del Landing Page para AgroBioTek Internacional.`,
    inverted: false,
    descriptionLink: 'Visita el sitio web',
    href: 'http://agrobiotek.com',
    tag: 'agrobiotek.com',
    wip: false
  },
  {
    index: 1,
    title: "Cámara hondureña de la leche CAHLE",
    image: 'wwd01.jpg',
    content: `Diseño y desarrollo del sitio web para la Cámara hondureña de la leche, utilizando JAMStack como arquitectura de desarrollo.`,
    inverted: true,
    descriptionLink: 'Visita el sitio web',
    href: 'https://www.cahle.org/',
    tag: 'www.cahle.org',
    wip: false
  },
  {
    index: 0,
    title: "AgroBioTek Capacitaciones",
    image: 'wwd01.jpg',
    content: `Diseño y desarrollo de la plataforma de marketing para capacitaciones de agroBioTek en Centroamerica.`,
    inverted: false,
    descriptionLink: 'Trabajo en desarrollo',
    href: null,
    tag: null,
    wip: true
  }
]

const Works = () => {
  return (
    <Section.Container id="works">
      <Section.Header name="Trabajos Recientes" />
      {dataWorks.map(works => (
        <ProjectCard 
          key={works.index} 
          {...works}
        />
      ))}
    </Section.Container>
  )
}

export default Works;
import React from 'react'

import styles from '../styles/projects.module.css'

const Projects = () => {

  const projects = [
    {
      id: 1,
      name: "JPC, LLC",
      url: '',
      image: 'https://miro.medium.com/max/2400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
      description: ''
    },
    {
      id: 2,
      name: "JPC, LLC",
      url: '',
      image: 'https://miro.medium.com/max/2400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    {
      id: 3,
      name: "JPC, LLC",
      url: '',
      image: 'https://miro.medium.com/max/2400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    }
  ]
  return (
    <section>
      <h2>My Projects</h2>
      <div className={styles.container}>
        {projects.map((project, index) => {
          return (
            <div className={styles.card}>
              <img alt={project.name} src={project.image} />
              <h1>
                {project.name}
              </h1>
              <p>
                {project.description}
              </p>
            </div>
          )
        })}
      </div>
      <a href="#main">About me</a>
    </section>
  )
}

export default Projects
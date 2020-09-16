import React from 'react'
import jpc from '../images/JPC.png'
import portfolio from '../images/Portfolio.png'
import boston from '../images/boston.png'
import {FaReact} from 'react-icons/fa'
import {SiStyledComponents} from 'react-icons/si'
import {GrGatsbyjs, GrGraphQl} from 'react-icons/gr'
import {AiFillGithub} from 'react-icons/ai'

import styles from '../styles/projects.module.css'

const Projects = () => {


  return (
    <section>
      <a id="projects"></a>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.container}>

        <div>
              <div className={styles.card}>
                <img alt="Jpc Sewing" className={styles.image} src={jpc} />
                <h1>
                  JPC Custom Sewing
                </h1>
                <p>
                A mobile responsive website designed and developed for a client.  I was the sole designer, developer and worked closely with the owner as the content writer.  I also used basic Photoshop to enhance the professionalism of the photos in his portfolio.
                </p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>
                    <FaReact/>
                    React
                  </li>
                  <li>
                    <SiStyledComponents />
                    Styled Components
                  </li>
                  <li>
                    <GrGatsbyjs />
                    Gatsby
                  </li>
                  <li>
                    <GrGraphQl />
                    GraphQL
                  </li>
                  <li>ContentfulCMS</li>
                </ul>
                <div className={styles.linksBox}></div>
                <h5>
                  <a href='https://github.com/madihara/jpc-llc'
                  target='_blank'
                  rel="noopener noreferrer">GitHub repository</a>
                </h5>
                <h5>
                   <a href='https://jpccustomtestsite.netlify.app/'
                   target='_blank'
                   rel="noopener noreferrer">Live Site</a>
                </h5>
              </div>
      
        </div>
        <div>
              <div className={styles.card}>
                <img alt="My Portfolio" className={styles.image} src={portfolio} />
                <h1>
                  My Portfolio
                </h1>
                <p>
                A mobile responsive site designed and developed using CSS Modules and React.
                </p>
                <h3>Technologies used:</h3>
                <ul>
                  <li>
                    <FaReact/>
                    React
                  </li>
                  <li>
                    CSS Modules
                  </li>
                </ul>
                <div className={styles.linksBox}></div>
                <h5>
                  <a href='https://github.com/madihara/portfolio'
                  target='_blank'
                  rel="noopener noreferrer">GitHub repository</a>
                </h5>
              </div>
      
        </div>
        <div>
              <div className={styles.card}>
                <img alt="BostonTerrier Css" className={styles.image} src={boston} />
                <h1>
                  Pure CSS Boston Terrier
                </h1>
                <p>
                While learning CSS I decided to take on a fun side project and make a pure CSS image of my dog.
                </p>
                <div className={styles.linksBox}></div>
                <h5>
                  <a href='https://codepen.io/madihara/pen/bGGPLBP'
                  target='_blank'
                  rel="noopener noreferrer">CodePen</a>
                </h5>
              </div>
      
        </div>
        
      </div>
    </section>
  )
}

export default Projects
import React from 'react'

import styles from '../styles/hero.module.css'


const Hero = () => {
  return (
    <main className={styles.container} id="main">
      <span>
        <a id="main"></a>
        <h1>
          Hey, I'm Madison.
        </h1>
        <h4>I'm a javascript developer.</h4>
        <p className={styles.text}>I'm a passionate Front End Developer and lover of React.  I have experience using modern HTML, CSS, and JavaScript to create responsive, user first websites.</p>
        <p className={styles.text}>
          I also have a big desire to eventually grow into a fullstack developer and I and I am particularly fond of GraphQL, interested in non-relational databases, data visualization, and eager to learn about cloud computing.
        </p>

        <p className={styles.text}>When I'm not building webpages, I love to spend time with my dog, stay active boxing and playing in adult kickball leagues, and perfect my gluten-free baking. I'm often spotted surfing, paddleboarding, or otherwise enjoying the water.</p>
      </span>
    </main>
  )
}

export default Hero
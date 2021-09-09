import React from 'react'
import classes from './About.module.css';

function About() {
  return (
    <div className={classes.aboutMainContainer}>
      <p>{'Made by Aahad Aazar'}</p>
      <p>{'Using '}
        <a rel="noreferrer" href="https://pokeapi.co/" target='_blank'>{'PokeApi'}</a>
      </p>
      <p>{'Tech: ReactJS, ChakraUI, ContextAPI'}</p>
    </div>
  )
}

export default About


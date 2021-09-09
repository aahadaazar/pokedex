import React from 'react'
import classes from './Header.module.css';
import img from '../../assets/pokemon-logo.png';
import { Link as RouterLink } from 'react-router-dom';

function Header() {
  return (
    <div className={classes.mainHeaderContainer}>
      <img className={classes.logo} alt={'pokemon-logo'} src={img} />
      <div className={classes.navigation}>
          <RouterLink to="/">
            Home
          </RouterLink>
          <RouterLink to="/team">
            Team
          </RouterLink>
          <RouterLink to="/about">
            About
          </RouterLink>
      </div>
    </div>
  )
}

export default Header



import React, { useContext, useEffect } from 'react';
import classes from './Home.module.css';
import HomeSearch from '../../components/HomeSearch/HomeSearch';
import HomeDisplay from '../../components/HomeDisplay/HomeDisplay';
import Context from '../../context/Context';

function Home() {
  const {
    loading,
    setPokemonData,}
    = useContext(Context);

  useEffect(() => {
    if (loading) {
      setPokemonData();
    }
    return () => {
      setPokemonData()
    }
    // eslint-disable-next-line
  }, [loading]);

  return (
    <div className={classes.mainHomeContainer}>
      <HomeSearch
        classes={classes}
      />
      <div className={classes.displayContainer}>
        <HomeDisplay
          classes={classes}
        />
      </div>
    </div>
  )
}

export default Home;


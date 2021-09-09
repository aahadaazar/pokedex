import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { React } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Team from './containers/Team/Team';
import Provider from './context/Provider';
import About from './containers/About/About';

function App() {

  // useEffect(() => {
  //   const localStorageTeam = localStorage.getItem('pokeTeam');
  //   if (!localStorageTeam) {
  //     localStorage.setItem('pokeTeam', JSON.stringify(pokemonTeam));
  //   } else {
  //     setPokemonTeam(JSON.parse(localStorageTeam));
  //   }
  //   // eslint-disable-next-line
  // }, []);

  return (
    <Provider>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Context.Consumer> */}
            <Route exact path="/team">
              <Team />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            {/* </Context.Consumer> */}
          </Switch>
        </BrowserRouter>
      </div >
    </Provider>
  );
}

export default App;

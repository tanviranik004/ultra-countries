import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
import CountriesDetail from './components/CountriesDetail/CountriesDetail';

function App() {
  
  return (
    <Router>
     <Switch>
       <Route path='/home'>
         <Home/>
       </Route>
       <Route path='/name/:countryName'>
         <CountriesDetail/>
       </Route>
       
        <Route exact path='/'>
          <Home/>

        </Route>
        <Route path='*'>
          <NoMatch/>
        </Route>

     </Switch>
     
    </Router>
  );
}

export default App;

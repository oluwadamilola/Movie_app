import React from 'react';
import Characters from './mainCharacters/Characters'
import Character from './character/Character'
import '../styles/app.scss';
import "@babel/polyfill";
import {Route} from 'react-router-dom';

const App = () => (
  <>
   <Route path ="/" exact={true} component={Characters}/>
   <Route path="/character/:characterID" exact={true} component={Character} />
  </>
)


export default App;
import React from 'react';
import Characters from './characters/Characters'
import Character from './characters/Character'
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
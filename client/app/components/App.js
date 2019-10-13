import React from 'react';
//import Book from './Book'
import Characters from './characters/Characters'
import Character from './characters/Character'
import '../styles/app.scss';
import {Route} from 'react-router-dom';

const App = () => (
  <>
   <Route path ="/" exact={true} component={Characters}/>
   <Route path="/character/:characterID" exact={true} component={Character} />
  </>
)


export default App;
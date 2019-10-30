import React from 'react';
import Characters from './characters/Characters'
import Character from './character/Character'
import '../styles/app.scss';

import {Route} from 'react-router-dom';

const App = () => (
  <>
   <Route path ="/" exact component={Characters}/>
   <Route path="/character/:characterID" exact component={Character} />
  </>
)


export default App;
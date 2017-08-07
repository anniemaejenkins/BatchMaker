import React from 'react';
import ReactDOM from 'react-dom';

import './styles/index.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App.js';
import RecipesList from './components/RecipesList.js';
import RecipeForm from './components/RecipeForm.js';
import BaseLayout from './components/BaseLayout.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        {/*<Route path="/recipeslist" component={RecipesList} />*/}
        <Route path="/recipeform" component={RecipeForm} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>
  ,
   document.getElementById('root')
 );

registerServiceWorker();

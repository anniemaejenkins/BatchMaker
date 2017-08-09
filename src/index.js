import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import reducers from './reducers';
import requireAuth from './components/require_auth';
import './styles/index.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import App from './components/App.js';
import RecipesList from './components/RecipesList.js';
import RecipeForm from './components/RecipeForm.js';
import BaseLayout from './components/BaseLayout.js';

import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
const user = localStorage.getItem('user');

if(user) {
  store.dispatch({ type: 'AUTH_USER'});
}

ReactDOM.render(
  // the connect is a HOC that is specifically made to make communication with the Provider
  // Provider wraps Redux store (had direct access to the Redux store) and watched for changes
  // When changes occur, the Provider updates child components - broadcasting down to any connected components
  <Provider store={ store }>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/recipeslist" component={ requireAuth(RecipesList) } />
          <Route path="/recipeform" component={ requireAuth(RecipeForm) } />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>
  ,
   document.getElementById('root')
 );

registerServiceWorker();

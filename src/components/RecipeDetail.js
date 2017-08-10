import React, { Component } from 'react';

import { PARSE_BASE_URL, PARSE_HEADERS }  from './../utilities/parse.js';

export default class RecipeDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: {}
    };
  }

componentDidMount(){
  fetch("https://baby-parse-server.herokuapp.com/classes/Recipe", { headers: PARSE_HEADERS })
    .then(results => results.json())
    .then(json => {
      // console.log('json', json.results);
      let recipe = json.results.find(item => item.objectId === this.props.match.params.id );
      this.setState({recipe});
    });
}


  render(){
    console.log('this', this.state);
    return(
      <div>

        <h1>{ this.state.recipe.recipeName }</h1>
        <p>by { this.state.recipe.author }</p>
        <p>{ this.state.recipe.photoUrl }</p>
        <table>
          <thead>
            <tr>
              <th>Recipe Type</th>
              <th>Prep Time</th>
              <th>Cook Time</th>
              <th>Cook Temp</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <td>{ this.state.recipe.recipeType }</td>
              <td>{ this.state.recipe.prepTime }</td>
              <td>{ this.state.recipe.cookTime }</td>
              <td>{ this.state.recipe.temp } { this.state.recipe.degree }</td>
            </tr>
          </tfoot>
        </table>

        <table>
          <thead>
            <tr>
              <th>{ this.state.recipe.amount } { this.state.recipe.amountNotes }</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ingredient amount</td>
              <td>ingredient</td>
            </tr>
          </tbody>
        </table>

        <div>
          <p>step placeholder</p>
        </div>

        <div>
          <p> { this.state.recipe.personalNotes }</p>
        </div>

      </div>
    );
  }
}

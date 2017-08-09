import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { PARSE_HEADERS } from './../utilities/parse.js';

export default class RecipesList extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: []
    };
  }

  componentDidMount(){
    fetch("https://baby-parse-server.herokuapp.com/classes/Recipe", { headers: PARSE_HEADERS }).then(results => {
      return results.json();
    }).then(data => {
      // console.log("data",data);
      this.setState({recipes: data.results});
    });
  }
  render(){

    let recipes = this.state.recipes.map((recipe, index) => {
      return (
        <div key={ index }>
          { recipe.recipeName }
        </div>
      )
    });



    return(
      <div>
        <h1>{ recipes }</h1>
      </div>
    );
  }
}

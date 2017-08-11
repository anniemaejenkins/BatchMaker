// Recipe Component
// render recipe details
// inside the render, map over the recipe.steps and return a STEP COMPONENT  for each one (assign property of step to the component)
//
// Step Component
// render step details
// inside the render, map over the step.ingredients and return an INGREDIENT COMPONENT  for each one (assign property of ingrendient to the component)
//
// Ingredient Component
// render the ingredient details

import React, { Component } from 'react';

import Ingredient from './Ingredient.js';

export default class Step extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: [{}]
    };
    this._handleIngredients = this._handleIngredients.bind(this);
    this._addIngredients = this._addIngredients.bind(this);
  }
  _handleIngredients(input, index) {
    let ingredients = this.state.ingredients;
    ingredients[index] = input;
    this.setState({ ingredients });
    // console.log(this.state.ingredients);
  }

    _addIngredients() {
      let ingredients = this.state.ingredients;
      ingredients.push({});
      this.setState({ ingredients });
    }
  render(){
    // console.log('here', this.props.index);
    let ingredients = this.state.ingredients.map((ingredient, index) => {
      return (
          <Ingredient ingredient={ ingredient } index={ index } handleIngredients={ this._handleIngredients } />
      )
    })
    return(
      <div>
        { ingredients }
        <input type="button" placeholder="add" value="+" onClick={ this._addIngredients } />

        <input type="text" onChange={ (event) => this.props.handleStepNotes(event.target.value, this.props.index) } />
      </div>
    )
  }
}

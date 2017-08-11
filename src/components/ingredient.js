import React, { Component } from 'react';

export default class Ingredient extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredient: {
        amount: 1,
        unit: ''
      }
    };
    this._handleUnit = this._handleUnit.bind(this);
    this._handleIngredAmount = this._handleIngredAmount.bind(this);
  }

    _handleUnit(event){
      let ingredient = this.state.ingredient;
      ingredient.unit = event.target.value;
      this.setState({
        ingredient
      });
    }

    _handleIngredAmount(event){
      let ingredient = this.state.ingredient;
      ingredient.amount = event.target.value;
      this.setState({
        ingredient
      });
    }

  render(){
    return(
      <div>
        <input type="number" value={ this.state.ingredient.amount } onChange={ this._handleIngredAmount }/>
        <select value={ this.state.ingredient.unit } onChange={ this._handleUnit }>
          <option placeholder="cups">Cups</option>
          <option placeholder="quarts">Quarts</option>
          <option placeholder="pints">Pints</option>
        </select>
        <input type="text" onChange={ (event) => this.props.handleIngredients(event.target.value, this.props.index) } />
      </div>
    );
  }
}

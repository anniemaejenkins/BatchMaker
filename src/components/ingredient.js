import React, { Component } from 'react';

export default class Ingredient extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: []
    };
  }
  render(){
    return(
      <div>
        <input type="Number" />
        <select>
          <option placeholder="cups">Cups</option>
          <option placeholder="quarts">Quarts</option>
          <option placeholder="pints">Pints</option>
        </select>
        <input type="text" placeholder="Ingredient" />
        <input type="button" placeholder="add" />
      </div>
    );
  }
}

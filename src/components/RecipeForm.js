import React, { Component } from 'react';

export default class RecipeForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      photo: '',
      recipeName: '',
      author: '',
      private: true,
      recipeType: '',
      prepTime: '',
      cookTime: '',
      degree: '',
      temp: '',
      amount: '',
      amountNotes: ''
    };
    this.handlePrivacy = this.handlePrivacy.bind(this);
  }

  _handlePrivacy() {
    let setPrivate = !this.state.private;
    this.setState({
      private: setPrivate
    });
  }
  // _addToList(event) {
  //   event.preventDefault();
  //   let listItem = JSON.stringify(this.state);
  //
  //   fetch("https://baby-parse-server.herokuapp.com/recipe", {
  //     method: "POST",
  //     body: listItem,
  //     headers: {
  //       'Accept': ''
  //     }
  //   })
  // }

    render(){
      return(
        <div>
          <form onSubmit={ this._addToList }>

            <div>
              <label htmlFor="photo">Add a photo</label>
              <input type="file" id="photo" value={ this.state.photo } onChange={ this._handlePhoto } />
            </div>

            <div>
              <input type="text" placeholder="Recipe Name" value={ this.state.recipeName } onChange={ this._handleRecipeName } />
            </div>

            <div>
              <input type="text" placeholder="By" value={ this.state.author } onChange={ this._handleAuthor } />
            </div>

            <div>
              <label htmlFor='private'>Keep it Private</label>
              <input id='private' type="checkbox" name="privacy" checked={ this.state.private } onChange={this._handlePrivacy} />
            </div>

            <div>
              <label htmlFor='private'>Make it Public</label>
              <input id='private' type="checkbox" name="privacy" checked={ !this.state.private } onChange={ this._handlePrivacy } />
            </div>

            <div>
              <label>Recipe Type</label>
              <select placeholder="Recipe Type">
                <option placeholder="Breakfast">Breakfast</option>
                <option placeholder="Lunch">Lunch</option>
                <option placeholder="Dinner">Dinner</option>
                <option placeholder="Dessert">Dessert</option>
              </select>
            </div>

            <div>
              <input type="text" placeholder="Prep Time" />
            </div>

            <div>
              <input type="text" placeholder="Cook Time" />
            </div>

            <div>
              <label>°F</label>
              <select placeholder="°F">
                <option placeholder="Fahrenheit">Fahrenheit</option>
                <option placeholder="Celsius">Celsius</option>
              </select>
            </div>

            <div>
              <p>This recipe will make</p>
              <input type="tel" placeholder="Amount" />
              <input type="text" placeholder="cookies, loaves, etc" />
            </div>

          </form>
        </div>
      );
    }
}

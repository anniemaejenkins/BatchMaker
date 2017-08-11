import React, { Component } from 'react';
import { setPointer } from './../utilities/parse.js';
import Step from './step.js';



import { PARSE_BASE_URL, PARSE_HEADERS }  from './../utilities/parse.js';

export default class RecipeForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      photoUrl: '',
      recipeName: '',
      author: '',
      private: true,
      recipeType: '',
      prepTime: '',
      cookTime: '',
      degree: 'Fahrenheit',
      temp: 350,
      amount: 12,
      amountNotes: '',
      personalNotes: '',
      steps: [{}],
      ingredients: []
    };

    this._handlePrivacy = this._handlePrivacy.bind(this);
    this._handlePhoto = this._handlePhoto.bind(this);
    this._handleRecipeName = this._handleRecipeName.bind(this);
    this._handleAuthor = this._handleAuthor.bind(this);
    this._handleRecipeType = this._handleRecipeType.bind(this);
    this._handlePrepTime = this._handlePrepTime.bind(this);
    this._handleCookTime = this._handleCookTime.bind(this);
    this._handleTemp = this._handleTemp.bind(this);
    this._handleDegree = this._handleDegree.bind(this);
    this._handleAmount = this._handleAmount.bind(this);
    this._handleAmountNotes = this._handleAmountNotes.bind(this);
    this._handlePersonalNotes = this._handlePersonalNotes.bind(this);
    this._addToList = this._addToList.bind(this);
    this._handleStepNotes = this._handleStepNotes.bind(this);
    this._addStep = this._addStep.bind(this);
  }

  _handleStepNotes(input, index) {
    let steps = this.state.steps;
    steps[index].notes = input;
    this.setState({ steps });
    console.log(this.state.steps);
  }

  _addStep() {
    let steps = this.state.steps;
    steps.push({});
    this.setState({steps})
  }

  _handlePrivacy() {
    let setPrivate = !this.state.private;
    this.setState({
      private: setPrivate
    });
  }
  _handlePhoto(event) {
    this.setState({
      photoUrl: event.target.value
    });
  }
  _handleRecipeName(event) {
    this.setState({
      recipeName: event.target.value
    });
  }
  _handleAuthor(event) {
    this.setState({
      author: event.target.value
    });
  }
  _handleRecipeType(event) {
    this.setState({
      recipeType: event.target.value
    });
  }
  _handlePrepTime(event) {
    this.setState({
      prepTime: event.target.value
    });
  }
  _handleCookTime(event) {
    this.setState({
      cookTime: event.target.value
    });
  }
  _handleTemp(event) {
    this.setState({
      temp: Number(event.target.value)
    });
  }
  _handleDegree(event) {
    this.setState({
      degree: event.target.value
    });
  }
  _handleAmount(event) {
    this.setState({
      amount: Number(event.target.value)
    });
  }
  _handleAmountNotes(event) {
    this.setState({
      amountNotes: event.target.value
    });
  }
  _handlePersonalNotes(event) {
    this.setState({
      personalNotes: event.target.value
    });
  }
  _addToList(event) {
    event.preventDefault();
    console.log(event);
    console.log(this.state);
    let recipe = this.state
    let objectId = JSON.parse(localStorage.getItem('user')).objectId;
    recipe['chef'] = setPointer('_User', objectId);

    // this needs to go in an action creator
    fetch(`${PARSE_BASE_URL}/classes/Recipe`, {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: PARSE_HEADERS
    })
    .then(response => {
      console.log('new recipe added');
    })
    .catch(err => {
      console.log(err)
    });
  }

    render(){
      let steps = this.state.steps.map((step, index) => {
        return (
          <Step step={ step } index={ index } handleStepNotes={ this._handleStepNotes } key={ index }/>
        )
      })
      return(
        <div>
          <h1>Add a Recipe!</h1>
          <form onSubmit={ this._addToList }>

            <div>
              <label htmlFor="photo">Add a photo url!</label>
              <input type="text" id="photo" value={ this.state.photo } onChange={ this._handlePhoto } />
            </div>

            <div>
              <input type="text" placeholder="Recipe Name" value={ this.state.recipeName } onChange={ this._handleRecipeName } />
            </div>

            <div>
              <input type="text" placeholder="By" value={ this.state.author } onChange={ this._handleAuthor } />
            </div>

            <div>
              <label htmlFor='private'>Keep it Private</label>
              <input id='private' type="checkbox" name="privacy" checked={ this.state.private } onChange={ this._handlePrivacy } />
            </div>

            <div>
              <label htmlFor='private'>Make it Public</label>
              <input id='private' type="checkbox" name="privacy" checked={ !this.state.private } onChange={ this._handlePrivacy } />
            </div>

            <div>
              <label>Recipe Type</label>
              <select placeholder="Recipe Type" value={ this.state.recipeType } onChange={ this._handleRecipeType }>
                <option placeholder="Breakfast">Breakfast</option>
                <option placeholder="Lunch">Lunch</option>
                <option placeholder="Dinner">Dinner</option>
                <option placeholder="Dessert">Dessert</option>
              </select>
            </div>

            <div>
              <input type="text" placeholder="Prep Time" value={ this.state.prepTime } onChange={ this._handlePrepTime }/>
            </div>

            <div>
              <input type="text" placeholder="Cook Time" value={ this.state.cookTime } onChange={ this._handleCookTime } />
            </div>

            <div>
              <input type="number" placeholder="Cook Temp" value={ this.state.temp } onChange={ this._handleTemp } />
              <label>°F</label>
              <select placeholder="°F" value={ this.state.degree } onChange={ this._handleDegree }>
                <option placeholder="Fahrenheit">Fahrenheit</option>
                <option placeholder="Celsius">Celsius</option>
              </select>
            </div>

            <div>
              <p>This recipe will make</p>
              <input type="number" placeholder="Amount" value={ this.state.amount } onChange={ this._handleAmount }/>
              <input type="text" placeholder="cookies, loaves, etc" value={ this.state.amountNotes } onChange={ this._handleAmountNotes }/>
            </div>

            <div>
              <p>Steps</p>
              { steps }
              <input type='button' value='Add Step' onClick={this._addStep} />
            </div>

            <div>
              <label>Personal Notes</label>
              <input type="textarea" value={ this.state.personalNotes } onChange={ this._handlePersonalNotes } />
            </div>

            <div>
              <input type="submit" />
            </div>

          </form>
        </div>
      );
    }
}

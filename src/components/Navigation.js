import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div>
          <button>
            <NavLink className="HomeLink" to="/">
              Login
            </NavLink>
          </button>
        </div>

        <div>
          <button>
            <NavLink className="RecipeListLink" to="/recipeslist">
              Recipes List
            </NavLink>
          </button>
        </div>

        <div>
          <button>
            <NavLink className="RecipeFormLink" to="/recipeform">
              Recipe Form
            </NavLink>
          </button>
        </div>

      </div>
    );
  }
}

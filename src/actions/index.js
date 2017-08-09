import { PARSE_BASE_URL, PARSE_HEADERS } from './../utilities/parse.js';
import $ from 'jquery';

export function signup(user) {
  console.log('user', user);
  return function(dispatch) {
    fetch(`${PARSE_BASE_URL}/users`, {
      method: "POST",
      body: user,
      headers: PARSE_HEADERS
    })
    .then(response => response.json())
    .then((json) => {
      dispatch( { type: "AUTH_USER" });
      localStorage.setItem('user', JSON.stringify(json));
    })
    .catch(err => {
      console.log(err);
    });
  };
}

export function login(user) {
  console.log('user', user);
  return function(dispatch) {
    fetch(`${PARSE_BASE_URL}/login?${$.param(user)}`, {headers: PARSE_HEADERS})
    .then(response => response.json())
    .then((json) => {
      dispatch( { type: 'AUTH_USER'});
      localStorage.setItem('user', JSON.stringify(json));
    })
    .catch(err => {
      console.log(err);
    });
  }
}

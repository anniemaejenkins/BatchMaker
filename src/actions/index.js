import { PARSE_BASE_URL, PARSE_HEADERS } from './../utilities/parse.js';

export function signup(user) {
  console.log('user', user);
  return function() {
    fetch(`${PARSE_BASE_URL}/users`, {
      method: "POST",
      body: user,
      headers: PARSE_HEADERS
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });
  };
}

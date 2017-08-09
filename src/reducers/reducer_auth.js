
const INITIAL_STATE = {};

export default function( state = INITIAL_STATE , action ) {
  switch (action.type) {
    case 'AUTH_USER':
    return { ...state, authenticated: true};

      break;
    default: return state

  }
}

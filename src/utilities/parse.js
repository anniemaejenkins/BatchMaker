export const PARSE_BASE_URL = 'https://baby-parse-server.herokuapp.com';
export const PARSE_HEADERS = {
  "X-Parse-Application-Id": "anniejenkins",
  "X-Parse-REST-API-Key": "cats"
}

// parseClass is the class you want to associate the record (e.g. _User) if you want to record the specific user
// objectId is the user's objectId
export const setPointer = (parseClass, objectId) => {
  let pointerObject = {
    '__type': 'Pointer',
    'className': parseClass,
    objectId: objectId
  };

  return pointerObject;
};

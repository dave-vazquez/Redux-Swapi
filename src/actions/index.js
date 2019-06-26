import axios from "axios";

export const FETCH_CHARACTERS_START = "FETCH_CHARACTERS_START";
export const FETCH_CHARACTERS_SUCCESS = "FETCH_CHARACTERS_SUCCESS";
export const FETCH_CHARACTERS_FAILURE = "FETCH_CHARACTERS_FAILURE";

export const getCharacters = () => dispatch => {
  dispatch({ type: FETCH_CHARACTERS_START });
  axios
    .get("https://swapi.co/api/people/")
    .then(res => {
      dispatch({ type: FETCH_CHARACTERS_SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      dispatch({ type: FETCH_CHARACTERS_FAILURE, payload: err.message });
    });
};

import {
  FETCH_CHARACTERS_START,
  FETCH_CHARACTERS_SUCCESS,
  FETCH_CHARACTERS_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  fetching: false
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTERS_START:
      return {
        fetching: true
      };

    case FETCH_CHARACTERS_SUCCESS:
      return {
        characters: action.payload,
        fetching: false
      };
    case FETCH_CHARACTERS_FAILURE:
      return {
        characters: null,
        fetching: false
      };
    default:
      return state;
  }
};

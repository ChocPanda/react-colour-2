/********** Actions **********/

const RESET_GAME = "colours/RESET_GAME";

const colourReducer = (state = { colours: [], answer: null }, action = {}) => {
  switch (action.type) {
    case RESET_GAME:
    
      return {
        colours:
        answer:
      };
    default:
      return state;
  }
};

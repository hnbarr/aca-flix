import { combineReducers } from 'redux';

const myMovieList = (state =[], action) => {
    switch (action.type) {
      case 'MY_MOVIE_LIST_LOADED':
        return action.value
    default:
        return state
    }
  }
  
  const searchResults = (state=[], action) => {
    switch (action.type) {
      case 'SEARCH_RESULTS_LOADED':
        return [...state, action.value]
      default:
        return state
    }
  }

  export default combineReducers(myMovieList, searchResults)
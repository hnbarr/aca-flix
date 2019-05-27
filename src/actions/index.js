export const loadMyMovieList = () => {
    return function (dispatch) {
      fetch("/movies")
        .then((res) => {
            return res.json();})
        .then((movies) => {
            dispatch(myMovieListLoaded(movies));
        }); 
    return {
        type: "LOAD_MY_MOVIE_LIST"
    };
  };
}
export const myMovieListLoaded = (movies) => {
    return {
      type: "MY_MOVIE_LIST_LOADED",
      value: movies
    };
}

export const loadSearch = (searchTerm) => {
    return function (dispatch) {
      fetch(" https://api.themoviedb.org/3/search/multi?query=searchTerm&api_key=89dfa45b0ad821404ff430ecb24862aa")
        .then((res) => {
            return res.json();})
        .then((movies) => {
            dispatch(searchLoaded(movies));
        });
    return {
        type: "LOAD_SEARCH"
    };
  };
}
export const searchLoaded = (movies) => {
    return {
      type: "SEARCH_RESULTS_LOADED",
      value: movies.results
    }
}
  
export const saveMyMovie = (movie) => {
    return function (dispatch) {
    fetch("/movies")
      .post("/movies", movie)
      .then((res) => {
        return res.json();})
      .then((movies) => {
        dispatch(loadMyMovieList());
    });
  }
}
export const removeMyMovie = (id) => {
    return function (dispatch) {
    fetch("/movies")
      .delete(`/movies/${id}`)
      .then((res) => {
        return res.json();})
      .then((movies) => {
        dispatch(loadMyMovieList());
    });
  }
}
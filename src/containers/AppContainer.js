import { connect } from 'react-redux';
import App from '../App';
import { loadMyMovieList, myMovieListLoaded } from '../actions';


const mapStateToProps = (state)=> {
    return {
        myMovieList: state.myMovieList,
        searchResults: state.searchResults
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        loadMyMovieList() {
            dispatch(loadMyMovieList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
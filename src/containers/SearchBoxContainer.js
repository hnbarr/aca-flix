import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import { loadSearch } from '../actions'

const mapDispatchToProps = (dispatch) => {
    return{
        loadSearch(){
            dispatch(loadSearch())
        }
    }
}

export default connect(null, mapDispatchToProps)(SearchBox)
import { connect } from 'react-redux'
import { saveMyMovie, removeMyMovie } from '../actions';
import ListToggle from '../components/ListToggle';

const mapDispatchToProps= (dispatch) => {

    return {
        saveMyMovie() {
            dispatch(saveMyMovie())
        },
        removeMyMovie() {
            dispatch(removeMyMovie())
        }
    }
}

export default connect(null, mapDispatchToProps)(ListToggle)
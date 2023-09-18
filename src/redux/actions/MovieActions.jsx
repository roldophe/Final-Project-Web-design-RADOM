import { Base_Url } from '../../utilities/API/BaseURl';
import { api_key } from '../../utilities/API/Key';
import { ActionTypes } from './ActionTypes';

export const fectchAllMovies = () => {
    return (dispatch) => {
        fetch(`${Base_Url}/movie/popular?api_key=${api_key}&language=en-US&page=1`)
            .then(resp => resp.json())
            .then(res => dispatch({
                type: ActionTypes.FECTCH_MOVIES,
                payload: res
            }))
            .catch(er=>console.log('fetch movie error: ', er))
    }
}


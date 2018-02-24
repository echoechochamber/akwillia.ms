/* test of the api with redux
*
* this setup is inspired by the DUCKS proposal
* here https://github.com/erikras/ducks-modular-redux
* */
import axios from 'axios';

/* Actions */
const TEST_SUCCESS = 'TEST_SUCCESS';

/* Reducer */
export const testReducer = (state = {}, action) => {
    switch (action.type) {
        case 'TEST_SUCCESS':
            return Object.assign({}, state,{data : action.data});
        default:
            return state;
    }
}

/* Action Creators */
export const testSuccess = (data) => {
    return {type: TEST_SUCCESS, data: data.data};
}

/* Side Effects  */
export const tryMe = () => {
    return (dispatch) => {
        axios.get('/api',
        {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
    ).then((res) => {
            dispatch(testSuccess(res.data));
        })
    }
}

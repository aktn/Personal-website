import * as actionTypes from '../actions/actionTypes';

const initialState = {
    info: [],
    loading: false,
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_INFO_START: 
            return {
                ...state,
                loading: true
            };
        case actionTypes.FETCH_INFO_SUCCESS: 
            return {
                ...state,
                info: action.info,
                loading: false
            };
        case actionTypes.FETCH_INFO_FAIL:
            return{
                ...state,
                loading: false
            };
        default: 
            return state;
        
    }
}

export default reducer;
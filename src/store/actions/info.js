import * as actionTypes from './actionTypes';
import axios from '../../axios-firebase';


export const SumbitInfoSuccess = (data) => {
    return {
        type: actionTypes.ADD_INFO_SUCCESS,
        info: data
    }
}

export const SubmitInfoFail = (err) => {
    return {
        type: actionTypes.ADD_INFO_FAIL,
        error: err
    }
}

export const SubmitInfoStart = () => {
    return {
        type: actionTypes.ADD_INFO_START
    }
}

export const InfoInit = () => {
    return {
        type: actionTypes.INFO_INIT
    }
}


export const fetchInfoSuccess = (info) => {
    return {
        type: actionTypes.FETCH_INFO_SUCCESS,
        info: info
    }
}

export const fetchInfoFail = (err) => {
    return {
        type: actionTypes.FETCH_INFO_FAIL,
        err: err
    }
}

export const initInfo = () => {
    return dispatch => {
        axios.get('/info.json')
            .then(response => {
                dispatch(fetchInfoSuccess(response));
            })
            .catch(error => {
                dispatch(fetchInfoFail(error));
            });
    }
}

export const SubmitInfo = (data) => {
    return dispatch => {
        dispatch(SubmitInfoStart());
        axios.post('/info.json', data)
            .then(repsonse => {
                console.log(repsonse.data);
                //dispatch(SumbitInfoSuccess(response.data, data))
            })
            .catch(err => {
                dispatch(SubmitInfoFail(err));
            });
    }
}
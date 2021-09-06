import React from 'react'
import { getAuthUserData } from './../redux/auth_reducer'
import { stopSubmit } from "redux-form";
import { authAPI } from "../../API/api";
const INITIALALIZED_SUCCESS = 'INITIALALIZED_SUCCESS';




let initialState = {
    initialized: false
};

const appReduser = (state = initialState, action) => {
    switch (action.type) {
        case INITIALALIZED_SUCCESS:
            return {
                initialized: true
            }
        default:
            return state;
    }

}

export const initializedSuccess = () => ({
    type: INITIALALIZED_SUCCESS
});
export const initializApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess())
        })

}

export default appReduser;
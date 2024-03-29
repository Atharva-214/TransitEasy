import * as ActionTypes from './ActionTypes';

export const SpecialBusRequest = (state = {
    isLoading: false,
    specialBusRequest: [],
    errMess: null
}, action) => {
    switch (action.type) {
        case ActionTypes.SPECIALBUSREQUEST_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case ActionTypes.SPECIALBUSREQUEST_SUCCESS:
            return {
                ...state,
                isLoading: false,
                specialBusRequest: action.specialBusRequest,
                errMess: null
            };
        case ActionTypes.SPECIALBUSREQUEST_FAILURE:
            return {
                specialBusRequest: [],
                isLoading: false,
                errMess: action.message
            };
        default:
            return state
    }
}
import {SET_CURRENT_USER} from '../actions/types';
import {appConfig} from '../../utils/constant';
import {UserSession} from 'blockstack';
import * as blockstack from 'blockstack';
const initialState={
    userSession:new UserSession({appConfig}),
    user:null,
    blockstack:blockstack
}
export default function(state=initialState,action){
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                ...state,
                user:action.payload
            }
        default:
            return state;
    }
}
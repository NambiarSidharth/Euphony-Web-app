import {GET_SONG,GET_SONGS} from "../actions/types"
const initialState={
    song:null,
    songs:[],
    loading:false
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_SONG:
            return {
                ...state,
                song:action.payload
            }
        case GET_SONGS:
            return {
                ...state,
                songs:action.payload
            }
        default:
            return state;
    }
}
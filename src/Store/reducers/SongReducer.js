import {GET_SONG,GET_SONGS,GET_TRENDING_SONGS,GET_MT_SONGS,EXPLORE_SONGS} from "../actions/types"
const initialState={
    song:null,
    songs:[],
    trending:[],
    monthlytop:[],
    explore:[],
    favourites:[],
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
        case GET_MT_SONGS:
            return {
                ...state,
                monthlytop:action.payload
            }
        case GET_TRENDING_SONGS:
            return {
                ...state,
                trending: action.payload
            }
        case EXPLORE_SONGS:
            return {
                ...state,
                explore: action.payload
            }
        default:
            return state;
    }
}
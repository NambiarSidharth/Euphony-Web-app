import { SET_CURRENT_USER } from "./types";

export const setCurrentUser = (userData)=>(dispatch)=>{
    dispatch({
        type:SET_CURRENT_USER,
        payload:userData
    })

}
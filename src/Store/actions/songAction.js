import node from "../../utils/IPFS"
import {GET_SONGS,GET_SONG} from "./types"
//universal list for all songs existing
export const getUserSongs = (userSession)=>dispatch=>{
    //getting users from blockchain
    let songs
    const options = { decrypt: false };
        userSession.getFile(`my_songs.json`, options)
        .then((content) => {
            console.log(content)
          if(content) {
            songs = JSON.parse(content)

          } else {
            songs =[] 
          }
          console.log(songs)
        dispatch({
            type:GET_SONGS,
            payload:songs
        })
        }).catch(err=>{
            console.log(err)
        })
}
export const getSongsByGenre =()=>dispatch=>{

}
export const getSong = (identifier,list)=>dispatch=>{
//searching through the list
list.forEach(obj=>{
    if(obj.name===identifier){
        dispatch({
            type:GET_SONG,
            payload:obj
        })
    }
})
}
export const removeUserSong = (data,userData)=>dispatch=>{
    const options = { encrypt: false }
userData.putFile('my_songs.json',JSON.stringify(data),options)
.then(obj=>{
    dispatch({
        type:GET_SONGS,
        payload:data
    })
}
)
}
export const addUserSong = (data,userData)=>dispatch=>{
//add blockchain broadcast here
//---
const options = { encrypt: false }
userData.putFile('my_songs.json',JSON.stringify(data),options)
.then(obj=>{
    dispatch({
        type:GET_SONGS,
        payload:data
    })
})
}
//blockchain thing
export const allsongs = ()=>dispatch=>{
//call from blockchain directly

}


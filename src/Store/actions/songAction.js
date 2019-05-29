import node from "../../utils/IPFS"
import {GET_SONGS,GET_SONG} from "./types"
//universal list for all songs existing
export const getUserSongs = (userSession)=>dispatch=>{
    const options = { decrypt: false };
        userSession.getFile(`my_songs.json`, options)
        .then((content) => {
            console.log(content)
          if(content) {
            posts = JSON.parse(content)

          } else {
            posts =[] 
          }
          console.log(posts)
        dispatch({
            type:GET_SONGS,
            payload:posts
        })
        }).catch(err=>{
            console.log(err)
        })
}
export const getSongsByGenre =()=>dispatch=>{

}
export const getSong = (identifier,list)=>dispatch=>{
list.forEach(obj=>{
    if(obj.id===identifier){
        dispatch({
            type:GET_SONG,
            payload:obj
        })
    }
})
}
export const addUserSong = (data,userData)=>dispatch=>{
//add blockchain broadcast here
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

}


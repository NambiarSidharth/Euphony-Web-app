import node from "../../utils/IPFS"
import {GET_SONGS,GET_SONG,GET_MT_SONGS,GET_TRENDING_SONGS} from "./types";
import {url} from "../../utils/apiRef";
import axios from "axios"
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
export const getTrendingSongs= ()=>dispatch=>{
    axios.get(url+"/state/trending",(req,res)=>{

    }).then(obj=>{
        dispatch({
            type:GET_TRENDING_SONGS,
            payload:obj.data
        })
    })
    .catch(err=>{
        console.log(err)
    })
}
export const getMTSongs= ()=>dispatch=>{
    axios.get(url+"/state/mt",(req,res)=>{

    }).then(obj=>{
        dispatch({
            type:GET_MT_SONGS,
            payload:obj.data
        })
    })
    .catch(err=>{
        console.log(err)
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
console.log(data)
let message={
    type:"addSong",
    payload:data[data.length-1]
}
axios.post(url+"/state",message)
.then(obj=>{
    userData.putFile('my_songs.json',JSON.stringify(data),options)
.then(obj=>{
    dispatch({
        type:GET_SONGS,
        payload:data 
    })
})
})
.catch(err=>{
    console.log(err)
})
}

//blockchain thing
export const allSongs = (username)=>dispatch=>{
//call from blockchain directly
let data={
    type:"getSongs",
    payload:{
        userName:username
    }
}
    axios.post(url+"/state",data)
    .then(obj=>{
        dispatch({
            type:GET_SONGS,
            payload:obj.data.data
        })
    })
    .catch(err=>{
        console.log(err)
    })
} 
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserSongs,removeUserSong} from "../../Store/actions/songAction"
import PropTypes from "prop-types"
import {Link} from "react-router-dom"
import {Card, Button} from "react-bootstrap"
export class SongsList extends Component {
  componentDidMount(){
    const {userSession} = this.props.auth
    this.props.getUserSongs(userSession)
  }
  removeSong(key){
    const {userSession} = this.props.auth
    const {songs} = this.props.song;
    let newSongList=songs
    newSongList.splice(key,1)
    this.props.removeUserSong(newSongList,userSession)
  }
  render(){
    const {songs} = this.props.song
    let view
    if(songs.length===0){
      view=<h3>No songs yet</h3>
    }
    else{
      console.log(songs)
      view = songs.map((obj,i)=>{
        return <Card key={i}>
        <Card.Body>
        <Link to={`/song/${obj.name}`}>
        {obj.name}
        </Link>
        <Button variant="danger" onClick={this.removeSong.bind(this,i)}>Remove</Button>
        </Card.Body>
        </Card> 
      })
    }
    return (
      <div>
      <div>
      <h2>Your Songs</h2>
      </div>
        {view}
      </div>
    )
  }
}
const mapStateToProps = state=>({
  song:state.song,
  auth:state.auth
})
export default connect(mapStateToProps,{getUserSongs,removeUserSong})(SongsList)

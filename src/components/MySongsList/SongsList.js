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
        return <Card key={i} bg="dark" style={{float:"left",margin:"10px"}}>
        <Card.Body>
        <div className="row">
        <Link to={`/song/${obj.name}`}>
        {obj.name}
        </Link>
        </div>
        <div className="row mt2 center">
        <Button variant="outline-danger" className="center" onClick={this.removeSong.bind(this,i)}>Remove</Button>
        </div>
        <div className="row mt2 center">
        <Button variant="outline-success" className="center" onClick>add to Favourites</Button>
        </div>
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

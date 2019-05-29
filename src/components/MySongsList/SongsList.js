import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserSongs} from "../../Store/actions/songAction"
import PropTypes from "prop-types"
import {Card} from "react-bootstrap"
export class SongsList extends Component {
  componentDidMount(){
    const {userSession} = this.props.auth
    this.props.getUserSongs(userSession)
  }
  render() {
    const {songs} = this.props.song
    let view
    if(songs.length===0){
      view=<h3>No songs yet</h3>
    }
    else{
      console.log(songs)
      view = songs.map((obj,i)=>{
        return <Card>
        {i}
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
export default connect(mapStateToProps,{getUserSongs})(SongsList)

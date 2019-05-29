import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserSongs} from "../../Store/actions/songAction"
import PropTypes from "prop-types"
export class SongsList extends Component {
  componentDidMount(){
    const {userSession} = this.props.auth
    this.props.getUserSongs(userSession)
  }
  render() {
    return (
      <div>
        
      </div>
    )
  }
}
const mapStateToProps = state=>({
  song:state.song,
  auth:state.auth
})
export default connect(mapStateToProps,{getUserSongs})(SongsList)

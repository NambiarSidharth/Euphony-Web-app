import React, { Component } from 'react'
import {connect} from "react-redux"
import {getSong} from "../../Store/actions/songAction"
import ReactPlayer from 'react-player'
import PropTypes from "prop-types"
export class Song extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         start:false,
         like:false
      };
    };
    
    componentDidMount(){
     let songid=this.props.match.params.songid;
     const {songs} = this.props.song
     this.props.getSong(songid,songs)
    }
    render() {
        return (
            <div>
            <h1>songs baby</h1>
            <ReactPlayer url='https://soundcloud.com/polo-g/polo-g-feat-lil-tjay-pop-out' controls="true" />
            </div>
        )
    }
}

Song.propTypes = {
    song:PropTypes.object.isRequired,
    getSong:PropTypes.func.isRequired
}
const mapStateToProps = state=>({
    song:state.song
})

export default connect(mapStateToProps,{getSong})(Song)

import React, { Component } from 'react'
import {connect} from "react-redux"
import {getSong} from "../../Store/actions/songAction"
import PropTypes from "prop-types"
export class Song extends Component {
    componentDidMount(){
     let songid=this.props.match.params.songid;
     const {songs} = this.props.song
     this.props.getSong(songid,songs)
    }
    render() {
        return (
            <div>
            <h1>songs baby</h1>
            <audio>hello world</audio>
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

import React, { Component } from 'react'
import {connect} from "react-redux"
import {getSong} from "../../Store/actions/songAction"
import ReactPlayer from 'react-player'
import PropTypes from "prop-types"
import node from "../../utils/IPFS"
export class Song extends Component {
    constructor(props) {
      super(props)
      this.state = {
         start:false,
         like:false
      };
    };
    // pullSong = async (song)=>{
    //     console.log(songS)
    //     node.once('ready',()=>{
    //         node.cat(song.ipfsHash,(err,data)=>{
                
    //             console.log(data)
    //         })
    //     })  
    // }
    componentDidMount(){
     let songid=this.props.match.params.songid;
     const {songs} = this.props.song
     this.props.getSong(songid,songs)
    }

    render() {
        const {song} = this.props.song;
        if(song){
            console.log(song)
        }
        // let view
        // if()
        return (
            <div>
            <h1>songs baby</h1>
            {song?<ReactPlayer url={`https://ipfs.io/ipfs/${song.ipfsHash}`} controls="true" />:<p>Loading...</p>}
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

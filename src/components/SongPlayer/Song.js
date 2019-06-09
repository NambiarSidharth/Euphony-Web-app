import React, { Component } from 'react'
import {connect} from "react-redux"
import {getSong,getSongByName,allSongs} from "../../Store/actions/songAction"
import SongSuggestion from "./SongSuggestion";
import YourSongs from "./YourSongs";
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
    pullSong = async (song)=>{
        // console.log(song)
            await node.get(song.ipfsHash,(err,data)=>{ 
                console.log(data)
                console.log(err)
            })
    }
    componentDidMount(){
    let songid=this.props.match.params.songid;
    const {songs} = this.props.song
    //  this.props.getSong(songid,songs)
    this.props.getSongByName(songid);
    this.props.allSongs();
    }
    render() {
        const {song,explore} = this.props.song;

        if(song){
            console.log(song)
            this.pullSong(song)
        }
        return (
            <div>
            <div className="mv3">
            {song?<h3>{song.name}</h3>:null}
            </div>
            <div className="row">
            <div className="col-md-8">
            {song?<ReactPlayer url={`https://ipfs.infura.io/ipfs/${song.ipfsHash}`} playing={true} controls={true} />:<p>Loading...</p>}
            </div>
            <div className="col-md-4">
            <div>
            <h4>More Songs</h4>
            </div>
            <SongSuggestion songs={explore}/>
            //Songs List more and more
            </div>
            </div>
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

export default connect(mapStateToProps,{getSong,getSongByName,allSongs})(Song)

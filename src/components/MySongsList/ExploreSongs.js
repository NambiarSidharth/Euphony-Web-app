import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import {connect} from "react-redux"
import {allSongs} from "../../Store/actions/songAction"
import PropTypes from "prop-types" 
class ExploreSongs extends Component {
    componentDidMount(){
        this.props.allSongs();
    }
    render() {
        let view;
        const {songs,loading}= this.props.song;
        if(songs){
            console.log(songs)
            view = songs.map((obj,i)=>{
                return <Card>
                <Card.Body>
                {obj.name}
                </Card.Body>
                </Card>
            })
        }else{
            view=<p>Loading ...</p>
        }
        return (
            <div>
                {view}
            </div>
        )
    }
}

const mapStateToProps = state=>({
    song:state.song
})

export default connect(mapStateToProps,{allSongs})(ExploreSongs)
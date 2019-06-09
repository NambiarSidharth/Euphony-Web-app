import React, { Component } from 'react'
import {getUserSongs} from "../../Store/actions/songAction"
import {connect} from "react-redux"
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom";
export class YourSongs extends Component {
    componentDidMount(){
        this.props.getUserSongs()
    }
    render() {
        const songs=this.props.song;
        let view
        if(songs){
            view=songs.map(obj=>{
                return <Card>
                <Card.Body>
                <Link to={`/song/${obj.name}`}>{obj.name}</Link>
                </Card.Body>
                </Card>
            })
        }else{
            view=<p>
            Loading
            </p>
        }
        return (
            <div>
            {view}
            </div>
        )
    }
}
const mapStateToProps= state=>({
    song:state.song
})

export default connect(mapStateToProps,{getUserSongs})(YourSongs);

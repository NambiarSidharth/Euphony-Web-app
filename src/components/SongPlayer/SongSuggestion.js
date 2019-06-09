import React, { Component } from 'react'
import {Card} from "react-bootstrap"
import {Link} from "react-router-dom"
export class SongSuggestion extends Component {
    render() {
        const {songs} = this.props
        let view;
        if(songs.length===0){
            view=<p>Empty List</p>
        }else{
            view=songs.map(obj=>{
                return <Card>
                <Card.Body>
                <Link to={`/song/${obj.name}`}>{obj.name}</Link>
                </Card.Body>
                </Card>
            })
        }
        return (
            <div>
                {view}
            </div>
        )
    }
}

export default SongSuggestion

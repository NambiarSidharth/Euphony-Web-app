import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {allSongs} from "../../Store/actions/songAction"
import PropTypes from "prop-types" 
class ExploreSongs extends Component {
    componentDidMount(){
        this.props.allSongs();
    }
    render() {
        let view;
        const {explore,loading}= this.props.song;
        if(explore){
            console.log(explore)
            view = explore.map((obj,i)=>{
                return <Card>
                <Card.Body>
                <Link to={`/song/${obj.name}`}>{obj.name}</Link>
                </Card.Body>
                </Card>
            })
        }else{
            view=<p>Loading ...</p>
        }
        return (
            <div>
            <div className="row">
            <div>
            Create stuffs
            </div>
            </div>
                {view}
            </div>
        )
    }
}

const mapStateToProps = state=>({
    song:state.song
})

export default connect(mapStateToProps,{allSongs})(ExploreSongs)
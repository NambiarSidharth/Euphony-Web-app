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
                return <Card bg="dark" style={{float:"left",margin:"15px"}}>
                <Card.Body>
                <Link to={`/song/${obj.name}`} className="text-success">{obj.name}</Link>
                
                <div className="row mt2">
                <Button variant="outline-success" className="center">Download</Button>
                </div>
                <div className="row mt2">
                <Button variant="outline-success" className="center">Add to Favourites</Button>
                </div>
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
            {view}
            </div>
            </div>
               
            </div>
        )
    }
}

const mapStateToProps = state=>({
    song:state.song
})

export default connect(mapStateToProps,{allSongs})(ExploreSongs)
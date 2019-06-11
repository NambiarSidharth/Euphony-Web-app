import React, { Component } from 'react'
import {Card,Button} from 'react-bootstrap'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import {allSongs} from "../../Store/actions/songAction"
import PropTypes from "prop-types" 
import fileDownload from "js-file-download"
import node from "../../utils/IPFS"
class ExploreSongs extends Component {
    componentDidMount(){
        this.props.allSongs();
    }
    download = async (hash,name)=>{
        await node.get(hash,(err,files)=>{
            console.log(files)
            console.log(err)
            if(!err){
                let name1=name+".mp3"
                fileDownload(files[0].content,name1)
            }
        })
    }
    
    render() {
        let view;
        const {explore,loading}= this.props.song;
        if(explore){
            console.log(explore)
            view = explore.map((obj,i)=>{
                return <Card style={{float:"left",margin:"15px"}}>
                <Card.Body>
                <Link to={`/song/${obj.name}`} className="text-dark">{obj.name}</Link>
                
                <div className="row mt2">
                <Button variant="outline-success" className="center" onClick={this.download.bind(this,obj.ipfsHash,obj.name)}>Download</Button>
                </div>
                {
                    // <div className="row mt2">
                    // <Button variant="outline-success" className="center" onClick={this.addToFavourites.bind(this,i)}>Add to Favourites</Button>
                    // </div>
                }
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
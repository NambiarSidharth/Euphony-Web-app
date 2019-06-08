import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap"
export class MTList extends Component {
    render() {
        const {mt} = this.props;
        let view;
        if(mt.length>0){
            view=mt.map(obj=>{
                return <Card>
                <Card.Body>
                <Link to={`/song/${obj.name}`}>
                {obj.name}
                </Link>
                </Card.Body>
                </Card>
            })
        }else{
            view=<h5>No songs in montly top yet</h5>
        }
        return (
            <div>
                {view}
            </div>
        )
    }
}

export default MTList

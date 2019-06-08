import React, { Component } from 'react'
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";
export class TrendingList extends Component {
    render() {
        const {trending} = this.props;
        let view;
        if(trending.length>0){
            view=trending.map(obj=>{
                return <Card>
                <Card.Body>
                <Link to={`/song/${obj.name}`}>
                {obj.name}
                </Link>
                </Card.Body>
                </Card>
            })
        }else{
            view=<h5>No songs in trending yet</h5>
        }
        return (    
            <div>
                {view}
            </div>
        )
    }
}

export default TrendingList

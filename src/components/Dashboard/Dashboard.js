import React, { Component } from 'react'
import {Link} from "react-router-dom"
import SongsList from "../MySongsList/SongsList"
export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
        <Link to="/addSong" className="btn btn-info">Add Song</Link>
        </div>
        <div className="row mv2">
        <SongsList />
        </div>
      </div>
    )
  }
}

export default Dashboard

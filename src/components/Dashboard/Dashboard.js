import React, { Component } from 'react'
import {Link} from "react-router-dom"
import SongsList from "../MySongsList/SongsList"
export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="row">
        <h3>Dashboard</h3>
        </div>
        <div className="row mv2">
        <SongsList />
        </div>
      </div>
    )
  }
}

export default Dashboard

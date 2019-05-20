import React, { Component } from 'react'
import {getSong} from "../../Store/actions/songAction"
import {connect} from "react-redux"
import ipfs from "../../utils/IPFS"
// const ipfsHash1="QmNmBKaBXqutvz6ozwRyaf3aaUFYbvMWGMi7gUXegwhLby"

export class Landing extends Component {
  componentDidMount(){
  //   console.log("started")
  //   ipfs.get(ipfsHash1,(err,files)=>{
  //     console.log(files)
  //     console.log(err)
  // })
  }
  render() {
    return (
      <div>
        Landing Page
      </div>
    )
  }
}

export default connect(null,{getSong})(Landing)

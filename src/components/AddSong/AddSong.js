import React, { Component } from 'react'

export class AddSong extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         buffer:"",

      }
    }
    
  render() {
    return (
      <div>
      <form>
      <input type="file" onChange={this.captureFile} />
        <button type="submit">submit</button>
      </form>
      </div>
    )
  }
}

export default AddSong

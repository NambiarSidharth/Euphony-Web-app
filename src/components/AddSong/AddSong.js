import React, { Component } from 'react'
import ipfs from "../../utils/IPFS"

export class AddSong extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         buffer:"",
         ipfsHash:''
      }
      this.captureFile=this.captureFile.bind(this)
      this.convertToBuffer=this.convertToBuffer.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
    }
    captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
      };
 convertToBuffer = async(reader) => {
      //file is converted to a buffer for upload to IPFS
        const buffer = await Buffer.from(reader.result);
      //set this buffer -using es6 syntax
        this.setState({buffer});
    };
onSubmit = async (event) => {
        event.preventDefault();
        await ipfs.add(this.state.buffer, (err, ipfsHash) => {
          console.log(err,ipfsHash);
          //setState by setting ipfsHash to ipfsHash[0].hash 
          this.setState({ ipfsHash:ipfsHash[0].hash });
        }) //await ipfs.add 
      }; //onSubmit
  render() {
      const {ipfsHash} = this.state
    return (
      <div>
      <form onSubmit={this.onSubmit}>
      <input type="file" onChange={this.captureFile} />
        <button type="submit">submit</button>
      </form>
      <div>
        {ipfsHash!==''?<p>{ipfsHash}</p>:null}
      </div>
      </div>
    )
  }
}

export default AddSong

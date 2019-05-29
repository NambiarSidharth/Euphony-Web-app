import React, { Component } from 'react'
import node from "../../utils/IPFS"
import {addUserSong} from "../../Store/actions/songAction"
import {connect} from "react-redux"
import PropTypes from "prop-types"

export class AddSong extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         buffer:"",
         ipfsHash:'',
         fileData:null
      }
      this.captureFile=this.captureFile.bind(this)
      this.convertToBuffer=this.convertToBuffer.bind(this)
      this.onSubmit=this.onSubmit.bind(this)
    }
    captureFile =(event) => {
        event.stopPropagation()
        event.preventDefault()
        const file = event.target.files[0]
        this.setState({fileData:file})
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader)    
      };
 convertToBuffer = async(reader) => {
      //file is converted to a buffer for upload to IPFS
        const buffer = await Buffer.from(reader.result)
      //set this buffer -using es6 syntax
        this.setState({buffer});
    };
onSubmit = async (event) => {
        event.preventDefault();
        await node.add(this.state.buffer, (err, ipfsHash) => {
          console.log(err,ipfsHash);
          //setState by setting ipfsHash to ipfsHash[0].hash 
          this.setState({ ipfsHash:ipfsHash[0].hash });
          this.uploadMetaData()
        }) //await ipfs.add 
      }; //onSubmit
  uploadMetaData = ()=>{
    const {fileData,ipfsHash}=this.state
    const {userSession} = this.props.auth;
    const {songs} = this.props.song;
    let newsongs=songs
    console.log(fileData,ipfsHash)
    let userdata=userSession.loadUserData()
    console.log(userdata)
    let pushData = {
      lastModified:fileData.lastModified,
      name:fileData.name,
      size:fileData.size,
      type:fileData.type,
      ipfsHash:ipfsHash
    }
    newsongs.push(pushData)
    // this.props.addUserSong(newsongs,userSession)
  }
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
AddSong.propTypes = {
  auth:PropTypes.object.isRequired
}
const mapStateToProps = state=>({
  auth:state.auth,
  song:state.song
})

export default connect(mapStateToProps,{addUserSong})(AddSong)
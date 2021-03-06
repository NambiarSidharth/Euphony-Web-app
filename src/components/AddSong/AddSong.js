import React, { Component } from 'react'
import node from "../../utils/IPFS"
import {addUserSong} from "../../Store/actions/songAction"
import {connect} from "react-redux"
import {Card,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import axios from "axios";
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
        console.log(file,event.target.files)
        this.setState({fileData:file})
        if(file){
        let reader = new window.FileReader()
        reader.readAsArrayBuffer(file)
        reader.onloadend = () => this.convertToBuffer(reader) 
        }   
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
          console.log("added to the ipfs network")
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
      ipfsHash:ipfsHash,
      username:userdata.username,
      userName:userdata.profile.name
    }
    newsongs.push(pushData)
    this.props.addUserSong(newsongs,userSession)
  }
  render() {
      const {ipfsHash,fileData} = this.state
    return (
      <div>
      <Card className="mt3">
      <Card.Header>
      Upload Your Song here
      </Card.Header>
      <Card.Body>
      <form className="ma2" onSubmit={this.onSubmit}>
      <input type="file" className="form-control" onChange={this.captureFile} />
        <Button className="mt2 " variant="primary" type="submit">submit</Button>
      </form>
      </Card.Body>
      </Card>
      { fileData?<Card className="mt2">
        <Card.Body>
        <p>Name: {fileData.name}</p>
        <p>Size: {fileData.size}</p>
        <p>type: {fileData.type}</p>
        </Card.Body>
        </Card>:null
      }
      <div>
        {ipfsHash!==''?<p>uploaded with hash {ipfsHash}</p>:null}
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
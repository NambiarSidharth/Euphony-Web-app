import React, { Component } from 'react'

export class FavouriteSongs extends Component {
    componentDidMount(){
        //get favourite songs
    }
    render() {
        const {songs} = this.props.song
    let view
    if(songs.length===0){
      view=<h3>No songs yet</h3>
    }
    else{
      console.log(songs)
      view = songs.map((obj,i)=>{
        return <Card>
        {i}
        </Card> 
      })
    }
        return (
            <div>
                
            </div>
        )
    }
}

export default FavouriteSongs

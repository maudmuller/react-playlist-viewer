import React, { Component } from 'react';
import List from "List";

/*
const artists = [
  {name:"Bob Marley"},
  {name:"Bob Dylan"},
  {name:"Odezenne"},
  {name:"Kavinsky"}
]
*/

const kinds = {
  rap: {name:"Rap"},
  rock: {name:"Rock"},
  electro: {name:"Electro"}
}

const kindsArray = Object.keys(kinds).map((k) => { return kinds[k] });

export default class App extends Component {

  state = {
    artists:[]
  };

  componentDidMount(){
    console.log("")

    fetch("https://api.spotify.com/v1/search?query=Bob*&offset=0&limit=10&type=artist").then((responsive)=> {
      responsive.json().then((data) =>{
        console.log(data)
        if(!data.error){
        console.log(data)
        this.setState({artists:data.artists.items})
        }
      })
    });

  }

  render() {
    return (
      <div>
        <List title="Artist" items={this.state.artists} />
        <List title="Kind" items={kindsArray} />
      </div>
    )
  }
}

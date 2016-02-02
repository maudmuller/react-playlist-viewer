import React, { Component } from 'react';

import Item from "item";
import List from "list";

const artists = [
	{name: "bob marley"},
	{name: "bob Dylan"},
	{name: "odezenne"},
	{name: "Kavinsky"}
]

const kinds = {
	rap: {name: "rap"},
	rock: {name: "rock"},
	electro: {name: "electro"}
}

export default class App extends Component {

	getItem(artist, index){
		return (<Item key={index} name={artist.name} />)
	}

	render() {
		return (
			<div>
			<List items={artists} />
			{
				kinds &&
				kindArray.map((key, index)=> {
					console.log(kindArray[key])
				})
			}
			</div>
		);
	}
}
	


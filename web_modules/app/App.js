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

	/*
				artists &&
				artists.map((artist, index) => {
					return this.getItem(artist,index)
				})
			}*/

export default class App extends Component {
	render() {
		return (
			<div>
			<List items={artists} />
			{
				kinds &&
				Object.keys(kinds).map ((key, index) => {
					return(
						<ArtistItem key={index} name={kinds key].name} />
					)
				})
			}
			</div>
		);
	}
}
	


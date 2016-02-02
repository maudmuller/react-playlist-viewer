import React, {Component} from "react";
import Item from "Item";

const List = ({items = [ ]}) => 

(<div className="list">
{
	items &&
	items.map((items, index) => {
		return(
			<Item key={index} name={item.name} /> 
			);
	})
}
</div>

export default List
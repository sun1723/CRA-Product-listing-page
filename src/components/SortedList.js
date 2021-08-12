import React ,{useState,useEffect}from 'react'
import { useSelector } from 'react-redux';
import Dropdown from "./Dropdown";
import  ProductList  from "./productList";



const SortedList = () => {
	const initproducts = useSelector(state => state.products)
	
	console.log(initproducts)
	return (
		<div>
			<Dropdown />
      			<ProductList products={initproducts} />	
		</div>
	)
}
export default SortedList;

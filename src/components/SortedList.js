import React ,{useState,useEffect}from 'react'
import { useSelector ,connect} from 'react-redux';
import Dropdown from "./Dropdown";
import  ProductList  from "./productList";
import {store} from '../store/index'


const SortedList = (props) => {
	const [pros,setpros ] = useState(props.products);
	useEffect(() => {
		setpros(store.getState().products)
		
	}, [props.products])
	return (
		<div>
			<Dropdown />
      			<ProductList products={props.products} />	
		</div>
	)
};
const mapStateToProps = (state)=>{
	// console.log(state.products.products)
	return{
		
		products: state.products
	}
}
export default connect(mapStateToProps)(SortedList);

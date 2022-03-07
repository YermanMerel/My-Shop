import React, {useContext} from 'react';
import '@styles/OrderItem.scss';
import { AppContext } from '../context/AppContext';
import close from '@icons/icon_close.png';


const OrderItem = ({ product }) => {
    const { state, removeFromCart } = useContext(AppContext);
    //Función que vamos a eliminar
    const handleRemove = (product)=>{
        removeFromCart(product);
    }
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.image} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>{product.price}</p>
			<img src= {close} alt="close" onClick={e => handleRemove(product)}/>
		</div>
	);
}

export default OrderItem;

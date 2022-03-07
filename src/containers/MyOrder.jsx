import React, {useContext} from 'react';
import OrderItem from '../components/OrderItem';
import '@styles/MyOrder.scss';
import { AppContext } from '../context/AppContext';
import flechita from '@icons/flechita.svg';

const MyOrder = () => {
    const { state } = useContext(AppContext);
    //Vamos a tener el reducer aquí, si la requerimos en muchos lados podemos convertirla en un hook
    const sumTotal = ()=>{
        const reducer = (accumulator, currentValue ) => accumulator + currentValue.price;
        const sum = state.cart.reduce(reducer, 0);
        return sum.toFixed(2);
    }

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={flechita} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
                { state.cart.map(e => (
                    <OrderItem product={e} key={`orderItem-${e.id}`}/>
                ))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;

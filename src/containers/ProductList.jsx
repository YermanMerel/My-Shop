import React from 'react';
import ProductItem from '../components/ProductItem';
import '@styles/ProductList.scss';
import { useGetProducts } from '../hooks/useGetProducts';

const API = 'https://fakestoreapi.com/products';

const ProductList = () => {
    const products = useGetProducts(API);
	return (
		<section className="main-container">
			<div className="ProductList">
                {products.map(e =>(<ProductItem  product = {e} key={e.id} />))}
			</div>
		</section>
	);
}

export default ProductList;

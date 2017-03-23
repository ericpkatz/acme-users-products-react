import React from 'react';
import ProductListItem from './ProductListItem';
import ProductForm from './ProductForm';

const ProductList = ({ products, onDeleteProduct, onCreateProduct})=> (
  <div>
    <h1>Products</h1>
    <ProductForm onCreateProduct={ onCreateProduct }/>
  <ul className='list-group'> { products.map( product => <ProductListItem onDeleteProduct={ onDeleteProduct } key={ product.id } product={ product} /> ) }</ul>
  </div>
);

export default ProductList;

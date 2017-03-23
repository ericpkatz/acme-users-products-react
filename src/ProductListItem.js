import React from 'react';

const ProductListItem = ({ product, onDeleteProduct })=> (
  <li className='list-group-item'>
    { product.name }
    <button className='btn btn-warning' onClick={()=> onDeleteProduct( product )} style={{ float: 'right' }}>Delete</button>
    <br style={ { clear: 'both' } } />
  </li>
); 

export default ProductListItem;

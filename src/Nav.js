import React from 'react';

const Nav = ({ page, onPageChange, products, users })=> (
  <ul className='nav nav-tabs'>
    <li className={ page === 'users' ? 'active': ''}>
      <a onClick={()=> onPageChange('users')}>
        Users ({ users.length })
      </a>
    </li>
    <li className={ page === 'products' ? 'active': ''}>
      <a onClick={()=> onPageChange('products')}>
        Products ({ products.length })
      </a>
    </li>
  </ul>
); 

export default Nav;

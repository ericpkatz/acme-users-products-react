import React, { Component } from 'react';
import axios from 'axios';
import Nav from './Nav';
import ProductList from './ProductList';
import UserList from './UserList';

class App extends Component{
  constructor(){
    super();
    this.state = { users: [], products: [], page: 'products'};
    this.onPageChange = this.onPageChange.bind(this);
    this.onDeleteProduct = this.onDeleteProduct.bind(this);
    this.onCreateProduct = this.onCreateProduct.bind(this);
  }
  componentDidMount(){
    axios.get('/api/users')
      .then( response => response.data)
      .then( users => this.setState( { users }));
    axios.get('/api/products')
      .then( response => response.data)
      .then( products => this.setState( { products }));
  }
  onPageChange(page){
    this.setState({ page });
  }
  onCreateProduct(product){
    axios.post('/api/products', product)
      .then( response => {
        const product = response.data;
        const products = this.state.products.concat([ product ]);
        this.setState({ products });
      });
  }
  onDeleteProduct(product){
    const products = this.state.products.filter( _product => _product.id !== product.id);

    this.setState({ products });

    axios.delete(`/api/products/${product.id}`);
  }
  render(){
    const { page } = this.state;
    let view;
    if(page === 'users')
      view = <UserList users={ this.state.users} />
    else if(page === 'products')
      view = <ProductList onCreateProduct={this.onCreateProduct} products={ this.state.products } onDeleteProduct={ this.onDeleteProduct }/>;
    return (
      <div className='container'>
        <Nav onPageChange= { this.onPageChange } page={ page } products={ this.state.products } users={ this.state.users }/>
        { view }
      </div>
    );
  }
}

export default App;

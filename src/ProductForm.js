import React, { Component } from 'react';

class ProductForm extends Component{
  constructor(props){
    super();
    this.state = { name: name };
    this.onChangeName = this.onChangeName.bind(this);
    this.onCreateProduct = (ev)=> {
      ev.preventDefault();
      props.onCreateProduct({ name: this.state.name});
      this.setState( { name: '' } );
    }
  }
  onChangeName(e){
    const name = e.target.value;
    this.setState({ name });
  }
  render(){
    return (
      <form>
        <div className='form-group'>
          <label>Name</label>
          <input className='form-control' onChange={ this.onChangeName } value={ this.state.name} />
        </div>
        <button className='btn btn-primary' onClick={ this.onCreateProduct }>Save</button>
      </form>

    );
  }
}

export default ProductForm;

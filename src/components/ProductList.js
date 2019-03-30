import React, { Component } from 'react';
import Product from './Product';
import { ProductConsumer } from '../context';
import FilterPills from './FilterPills';

export default class ProductList extends Component {

  render() {
    return (
      <React.Fragment>

        <div className="container">

        <div className="py-5">
        <div style={{
          position: 'relative',
          textAlign:'center',
          zIndex:1,
          fontFamily: 'Lobster'}}
          className="text-blue">
        <h1>Welcome to PetShop!</h1>
        </div>

        {/* Pill nav experiment*/}
        <ProductConsumer>
          {(value) => FilterPills(value)}
        </ProductConsumer>
        {/* End experiment*/}

        <div className="row">
        <ProductConsumer>

          {(value) => {
            return (
              value.products.filter(item => {
                return value.currentSelection === 'all'
                ? item
                : item.category === value.currentSelection
              })
              .map((product) => {
                return <Product key={product.id} product={product}/>
              })
            )
          }}
        </ProductConsumer>
        </div>
        </div>
        </div>
      </React.Fragment>
    )
  }
}

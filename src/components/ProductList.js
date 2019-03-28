import React, { Component } from 'react'
import Product from './Product'
import { ProductConsumer } from '../context'

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
        <div style={{position:'relative', zIndex:1}}>
          <ul className="nav nav-pills">
            <li className="nav-item">
              <a className="nav-link active" href="#">All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Dogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Cats</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Other</a>
            </li>
          </ul>
          </div>
        {/* End experiment*/}



        <div className="row">
        <ProductConsumer>
          {(value) => {
            return value.products.map((product) => {
              return <Product key={product.id} product={product}/>
            })
          }}
        </ProductConsumer>
        </div>
        </div>
        </div>
      </React.Fragment>
    )
  }
}

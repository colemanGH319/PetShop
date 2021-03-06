import React, { Component } from 'react'

export default class Default extends Component {
  render() {
    console.log(this.props)
    return (
      <div style={{position:'relative', zIndex:1}} className="container">
        <div className="row">
        <div className="col-10 mx-auto text-center text-title pt-5">
          <h1 className="display-3">404</h1>
          <h1>Error</h1>
          <h2>Page not found</h2>
          <h3>
            The requested URL {' '}
            "{this.props.location.pathname}"
            {' '}was not found.
          </h3>
        </div>
        </div>
      </div>
    )
  }
}

import React from 'react';

export default function FilterPills({filterItems}){
  return (
    <div style={{position:'relative', zIndex:1}}>
      <ul id="filters" className="nav nav-pills filter-btn">
        <li className="nav-item">
          <button id="all" className="nav-link active" onClick={(e) => filterItems(e.target.id)}>All</button>
        </li>
        <li className="nav-item">
          <button id="dogs" className="nav-link" onClick={(e) => filterItems(e.target.id)}>Dogs</button>
        </li>
        <li className="nav-item">
          <button id="cats" className="nav-link" onClick={(e) => filterItems(e.target.id)}>Cats</button>
        </li>
        <li className="nav-item">
          <button id="other" className="nav-link" onClick={(e) => filterItems(e.target.id)}>Other</button>
        </li>
      </ul>
      </div>
  )
}

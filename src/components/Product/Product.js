import React from 'react'

import './Product.less'

const Product = (props) => {
  const { id, name, image, price, isAddedToCart, handleActionClick } = props
  return (
    <div className="list-group-item">
    <div  style={{backgroundColor: '#00b39f85'}}>
      <h2 className="list-group-item-heading">{name}</h2>
      <p className="list-group-item-text">
      <img src={image} alt={name}   style={{paddingLeft: "500px"}}/>
      </p>
      
    <div className="list-group-item-text"><h3 className="list-group-item-text"> {price}</h3></div>
      <div className='row'>
        <div className='col-xs-12'>
          <button className="btn btn-primary btn-md" onClick={() => handleActionClick(id)}>{isAddedToCart ? 'Remove' : 'Add to cart'}</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Product
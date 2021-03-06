import React, { Component } from 'react'
import { connect } from 'react-redux'

import CartItems from './CartItems'

import DataService from '../../service/DataService'
import * as CartSelectors from '../../store/reducers/cart'
import * as CartActions from '../../store/actions/cart'

class CartContainer extends Component {
  constructor() {
    super()

    this.state = {
      cartData: []
    }
  }

  componentWillMount() {
    this.props.dispatch(
      CartActions.updateCart()
    )
  }

  render() {
    return (
      <div className='container'>
        <h2 style={{color:"white"}}>My Cart</h2>
        <hr />
        <CartItems items={this.props.cartItems} handleItemRemove={this.handleItemRemove.bind(this)} />
      </div>
    )
  }

  handleItemRemove(id) {
    this.props.dispatch(
      CartActions.removeFromCart(id, this.props.cartItems)
    )
  }
}

function mapStateToProps(state) {
  return {
    cartItems: CartSelectors.getCartItems(state)
  }
}

export default connect(mapStateToProps)(CartContainer)
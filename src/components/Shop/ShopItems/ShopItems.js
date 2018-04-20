import React, { Component } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

import Product from '../../Product'

class ShopItems extends Component {
  render() {
    return (
      <div className='list-group'>
        <div className='row'>
          <InfiniteScroll
            pageStart={2}
            initialLoad={true}
            loadMore={this.loadMore.bind(this)}
            hasMore={true}
            loader={<div className="loader" style={{color:"white"}}>Loading ...</div>} >
              {
                this.props.items.map(item => (
                  <div className='list-group' key={item.id}>
                    <Product
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      isAddedToCart={false}
                      handleActionClick={this.productActionClicked.bind(this)} />
                  </div>
                ))
              }
            </InfiniteScroll>
        </div>
      </div>
    )
  }

  productActionClicked(id) {
    this.props.addToCart(id)
  }

  loadMore(pageSize) {
    if(pageSize < 7) {
      this.props.loadMoreData(pageSize)
    }
    
  }
}

export default ShopItems
import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import { useSelector } from 'react-redux'

import { selectAllFeaturedProducts } from '../features/products/productsSlice'

import FeaturedProductItem from './FeaturedProductItem'

function FeaturedProductList() {
  const featuredProducts = useSelector(selectAllFeaturedProducts)

  function groupArr(data, n) {
    var group = []
    for (var i = 0, j = 0; i < data.length; i++) {
      if (i >= n && i % n === 0) j++
      group[j] = group[j] || []
      group[j].push(data[i])
    }
    return group
  }

  let groupProducts = groupArr(featuredProducts, 4)

  return (
    <div id='featured-products' className='row d-none d-xl-flex flex-column'>
      <div className='featured-products-header'>
        <h3>Featured Products</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <Carousel style={{ marginTop: '25px' }}>
        {groupProducts.map((product, index) => (
          <Carousel.Item key={index}>
            <Row>
              {product.map((pr) => (
                <Col sm={12} md={6} lg={4} xl={3} key={pr.id}>
                  <FeaturedProductItem product={pr} />
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default FeaturedProductList

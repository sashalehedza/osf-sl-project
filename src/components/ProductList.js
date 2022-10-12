import React, { useState } from 'react'

import { Button, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import { useSelector } from 'react-redux'
import { selectAllProducts } from '../features/products/productsSlice'

import ProductItem from './ProductItem'

function ProductList() {
  const products = useSelector(selectAllProducts)
  const [productsPerPage, setProductsPerPage] = useState(8)

  const handleClick = () => {
    setProductsPerPage((prevVisibleProducts) => prevVisibleProducts + 4)
  }

  return (
    <>
      <Row>
        {products.slice(0, productsPerPage).map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product.id}>
            <ProductItem key={product.id} product={product} />
          </Col>
        ))}
      </Row>
      <Button
        variant='primary'
        style={{
          margin: '0 auto',
          marginBottom: '20px',
          display: productsPerPage >= products.length ? 'none' : 'block',
        }}
        onClick={handleClick}
      >
        Load more
      </Button>
    </>
  )
}

export default ProductList

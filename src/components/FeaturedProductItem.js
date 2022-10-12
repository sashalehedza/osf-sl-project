import React from 'react'

import { useNavigate } from 'react-router-dom'

import Card from 'react-bootstrap/Card'

function FeaturedProductItem({ product }) {
  const navigate = useNavigate()

  const moveToProduct = (productId) => {
    navigate(`/product/${productId}`)
  }

  return (
    <div className='card-container'>
      <Card className='text-center'>
        <Card.Img
          variant='top'
          src={`../assets/Home/Products/${product.img}`}
          onClick={() => moveToProduct(product.id)}
          className='custom-card'
        />
        <Card.Body>
          <Card.Text>{product.review}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default FeaturedProductItem

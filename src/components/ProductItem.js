import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { Button } from 'react-bootstrap'

import Card from 'react-bootstrap/Card'

import { useDispatch, useSelector } from 'react-redux'
import {
  addToFavourite,
  addToCart,
  selectAllFavourites,
} from '../features/products/productsSlice'

import GradientLogo from '../assets/card-gradient-logo.png'

function ProductItem({ product }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const favourites = useSelector(selectAllFavourites)
  const [productCount] = useState(1)

  const moveToProduct = (productId) => {
    navigate(`/product/${productId}`)
  }

  const addToFavoriteFunc = (productId) => {
    dispatch(addToFavourite({ productId: productId }))
  }

  const addToCartFunc = (productId) => {
    dispatch(addToCart({ productId: productId, count: productCount }))
  }
  return (
    <div>
      {product?.gradient ? (
        <div className='card-container gradient'>
          <Card className='custom-card text-center'>
            <Card.Img
              variant='top'
              src={`./assets/Home/Products/${product.img}`}
            />
            <Card.Body className='gradient-overlay'>
              <p>
                My dragons are misbehaving again. Unbelievable! <br />
                <span>
                  <img
                    style={{ width: '24px', height: '28px' }}
                    src={GradientLogo}
                    alt='gradient card logo'
                  />
                  5H AGO
                </span>
              </p>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <div className='card-container'>
          <Card className='text-center'>
            <Card.Img
              variant='top'
              src={`./assets/Home/Products/${product.img}`}
              onClick={() => moveToProduct(product.id)}
              className='custom-card-img'
            />
            <Card.Body>
              <Card.Text>{product.title}</Card.Text>
              <Button
                onClick={() => {
                  addToFavoriteFunc(Number(product.id))
                }}
                disabled={favourites.find(
                  (favourite) => Number(favourite.id) === Number(product.id)
                )}
              >
                add to favourite
              </Button>
              <Button
                onClick={() => {
                  addToCartFunc(Number(product.id))
                }}
              >
                add to cart ({product.price})
              </Button>
            </Card.Body>
          </Card>
        </div>
      )}
    </div>
  )
}

export default ProductItem

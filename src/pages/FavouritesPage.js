import React from 'react'
import { Button, Container, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeFromFavourite,
  selectAllFavourites,
} from '../features/products/productsSlice'

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

function FavouritesPage() {
  const dispatch = useDispatch()
  const favourites = useSelector(selectAllFavourites)

  const removeFromFavouriteFunc = (productId) => {
    dispatch(removeFromFavourite({ productId: productId }))
  }

  return (
    <div style={{ backgroundColor: '#e3dccb' }}>
      <Container style={{ height: '50px' }}></Container>
      <Container style={{ backgroundColor: 'white' }}>
        {favourites.map((favourite) => (
          <Row
            key={favourite.id}
            style={{ padding: '20px' }}
            className='d-flex flex-row justify-content-center align-items-center'
          >
            <Col>
              <Image
                src={`../assets/Home/Products/${favourite.img}`}
                style={{ width: '80px', height: '80px' }}
              />
            </Col>
            <Col>
              <h3>
                Id: {favourite.id}, Title: {favourite.title}
              </h3>
            </Col>
            <Col>
              <Button
                onClick={() => {
                  removeFromFavouriteFunc(Number(favourite.id))
                }}
              >
                remove from favourite
              </Button>
            </Col>
          </Row>
        ))}
      </Container>
      <Container style={{ height: '50px' }}></Container>
    </div>
  )
}

export default FavouritesPage

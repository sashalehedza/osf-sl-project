import React, { useState } from 'react'
import { Container, Image } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import { useSelector } from 'react-redux'
import { selectAllCart } from '../features/products/productsSlice'

import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Counter from '../components/Counter'

const radioValues = [
  { id: 1, text: 'Flat rate $10', value: 10 },
  { id: 2, text: 'Free shipping', value: 0 },
  { id: 3, text: 'International $60', value: 60 },
  { id: 4, text: 'Local Delivery $5', value: 5 },
  { id: 5, text: 'Local Pickup (Free)', value: 0 },
]

function CartPage() {
  const carts = useSelector(selectAllCart)

  const [checkedShipping, setCheckedShipping] = useState(2)

  const subtotalPrice = carts.reduce((price, product) => {
    return price + product.price * product.count
  }, 0)

  const checkedMethodValue = radioValues[checkedShipping - 1].value

  const totalPrice = subtotalPrice + checkedMethodValue

  function setCheckedShippingFunc(id) {
    setCheckedShipping(id)
  }

  return (
    <div style={{ backgroundColor: '#e3dccb' }}>
      <Container style={{ height: '50px' }}></Container>
      <Container style={{ backgroundColor: 'white' }}>
        {carts.length !== 0 && (
          <>
            {carts.map((cart) => (
              <Row
                key={cart.id}
                style={{ padding: '20px' }}
                className='d-flex flex-row justify-content-center align-items-center'
              >
                <Col sm={1}>
                  <Image
                    src={`../assets/Home/Products/${cart.img}`}
                    style={{ width: '80px', height: '80px' }}
                  />
                </Col>
                <Col sm={5}>{cart.title}</Col>
                <Counter cart={cart} />
              </Row>
            ))}
            <hr />
          </>
        )}

        <Row className='payment'>
          <Col sm={6}>
            <input
              className='apply-input'
              type='text'
              placeholder='Enter Cupon Code'
            />
            <button className='apply-button'>APPLY</button>
          </Col>
          <Col sm={6}>
            <Row>
              <Col>
                <button className='apply-button'>UPDATE CART</button>
              </Col>
              <Col>
                <button className='apply-button'>PROCCEED TO CHECKOUT</button>
              </Col>
            </Row>
            <Row style={{ paddingTop: '20px' }}>
              <Col>
                <div>
                  <h4>Cart Subtotal: </h4>
                </div>
              </Col>
              <Col>
                <h4>{subtotalPrice}</h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <h4>Shipping and Handling</h4>
                </div>
              </Col>
              <Col>
                <div>
                  <Form>
                    {radioValues.map((radioValue) => (
                      <div key={radioValue.id} className='mb-3'>
                        <Form.Check
                          type='radio'
                          id={`default-radio`}
                          label={`${radioValue.text}`}
                          onClick={() => setCheckedShippingFunc(radioValue.id)}
                          checked={radioValue.id === checkedShipping}
                          readOnly
                        />
                      </div>
                    ))}
                  </Form>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h4>ORDER TOTAL: </h4>
              </Col>
              <Col>
                <h4>{totalPrice}</h4>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container style={{ height: '50px' }}></Container>
    </div>
  )
}

export default CartPage

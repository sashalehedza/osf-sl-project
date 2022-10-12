import React from 'react'
import {
  addToCart,
  minusFromCart,
  removeFromCart,
  replaceInCart,
} from '../features/products/productsSlice'
import { useDispatch } from 'react-redux'
import { Col } from 'react-bootstrap'
import { TiDeleteOutline } from 'react-icons/ti'

function Counter({ cart }) {
  const dispatch = useDispatch()

  const addToCartFunc = () => {
    dispatch(addToCart({ productId: cart.id, count: 1 }))
  }

  const minusFromCartFunc = (productId) => {
    dispatch(minusFromCart({ productId: cart.id, count: 1 }))
  }

  const removeFromCartFunc = () => {
    dispatch(removeFromCart({ productId: cart.id }))
  }

  const onQuantityChanged = (e) => {
    dispatch(
      replaceInCart({
        productId: cart.id,
        count: Number(Number(e.target.value.replace(/\D/g, ''))),
      })
    )
  }

  return (
    <>
      <Col sm={2}>
        <form id='myform' method='POST' className='quantity' action='#'>
          <input
            type='button'
            value='-'
            className='qtyminus minus'
            field='quantity'
            onClick={() => {
              minusFromCartFunc()
            }}
            disabled={cart.count === 1}
          />
          <input
            type='text'
            name='quantity'
            value={cart.count}
            className='qty'
            onChange={onQuantityChanged}
          />

          <input
            type='button'
            value='+'
            className='qtyplus plus'
            field='quantity'
            onClick={() => {
              addToCartFunc()
            }}
          />
        </form>
      </Col>
      <Col sm={2}>${cart.count * cart.price}</Col>
      <Col sm={2}>
        <div onClick={() => removeFromCartFunc()}>
          <TiDeleteOutline
            style={{ cursor: 'pointer', width: '30px', height: '30px' }}
          />
        </div>
      </Col>
    </>
  )
}

export default Counter

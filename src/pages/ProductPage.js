import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import {
  selectProductById,
  addToCart,
} from '../features/products/productsSlice'

import { useParams, useNavigate } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'

import Image1 from '../assets/ProductPage/1-big.jpg'
import Image2 from '../assets/ProductPage/2-big.jpg'
import Image3 from '../assets/ProductPage/3-big.jpg'
import Image4 from '../assets/ProductPage/4-big.jpg'

import Image1sm from '../assets/ProductPage/1-small.jpg'
import Image2sm from '../assets/ProductPage/2-small.jpg'
import Image3sm from '../assets/ProductPage/3-small.jpg'
import Image4sm from '../assets/ProductPage/4-small.jpg'

import { FaFacebookF, FaGoogle, FaPinterestP } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import FeaturedProductList from '../components/FeaturedProductList'

function ProductPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { productId } = useParams()
  const [image, setImage] = useState(Image1)
  const [isReadMore, setIsReadMore] = useState(true)
  const [productQuantity, setProductQuantity] = useState(1)

  const text =
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'

  const product = useSelector((state) =>
    selectProductById(state, Number(productId))
  )

  if (!product) {
    return (
      <section>
        <h2>Product not found!</h2>
      </section>
    )
  }

  const onQuantityChanged = (e) => {
    setProductQuantity(Number(e.target.value.replace(/\D/g, '')))
  }

  const addToCartFunc = (productId) => {
    dispatch(addToCart({ productId: productId, count: productQuantity }))
  }

  const addToCartFuncAndRefresh = (productId) => {
    addToCartFunc(productId)
    setProductQuantity(1)
  }

  const moveToHome = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const moveToLandindPage = (e) => {
    e.preventDefault()
    navigate('/category')
  }

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore)
  }

  return (
    <div style={{ backgroundColor: '#e3dccb' }}>
      <Breadcrumb
        className='d-flex flex-row justify-content-center align-items-center'
        style={{ paddingTop: '50px', paddingBottom: '50px' }}
      >
        <Breadcrumb.Item onClick={moveToHome}>Home</Breadcrumb.Item>
        <Breadcrumb.Item onClick={moveToLandindPage}>
          Category Landing Services
        </Breadcrumb.Item>
        <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
      </Breadcrumb>
      <Container>
        <div id='popular-items-2' className='row'>
          <div className='container-fluid d-flex flex-column'>
            <hr className='hr-custom' />
            <h2>{product.title}</h2>
          </div>
        </div>
      </Container>
      <Container style={{ backgroundColor: 'white' }}>
        <Row>
          <Col xs={6} style={{ padding: '0' }}>
            <img className='d-block w-100' src={image} alt='Second slide' />
          </Col>
          <Col xs={2}>
            <Row>
              <div className='thumbnail-image' onClick={() => setImage(Image1)}>
                <img
                  src={Image1sm}
                  alt='Second slide'
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Row>
            <Row>
              <div className='thumbnail-image' onClick={() => setImage(Image2)}>
                <img
                  src={Image2sm}
                  alt='Second slide'
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Row>
            <Row>
              <div className='thumbnail-image' onClick={() => setImage(Image3)}>
                <img
                  src={Image3sm}
                  alt='Second slide'
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Row>
            <Row>
              <div className='thumbnail-image' onClick={() => setImage(Image4)}>
                <img
                  src={Image4sm}
                  alt='Second slide'
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </Row>
          </Col>
          <Col xs={4}>
            <div style={{ marginTop: '20px' }}>
              <h3>${product.price}</h3>
            </div>
            <div>
              <Row>
                <Row>
                  <div className='select-section'>
                    <select name='price' id='price'>
                      <option value='darkgrey'>Dark Grey</option>
                      <option value='black'>Black</option>
                      <option value='red'>Red</option>
                    </select>
                  </div>
                </Row>
                <Row>
                  <Col>
                    <form
                      id='myform'
                      method='POST'
                      className='quantity'
                      action='#'
                    >
                      <input
                        type='button'
                        value='-'
                        className='qtyminus minus'
                        field='quantity'
                        onClick={() => {
                          setProductQuantity((prev) => prev - 1)
                        }}
                        disabled={productQuantity === 1}
                      />
                      <input
                        type='text'
                        name='quantity'
                        value={productQuantity}
                        className='qty'
                        onChange={onQuantityChanged}
                      />
                      <input
                        type='button'
                        value='+'
                        className='qtyplus plus'
                        field='quantity'
                        onClick={() => {
                          setProductQuantity((prev) => prev + 1)
                        }}
                      />
                    </form>
                  </Col>
                  <Col>
                    <button
                      onClick={() => {
                        addToCartFuncAndRefresh(Number(product.id))
                      }}
                      className='btn-flat'
                    >
                      add to cart
                    </button>
                  </Col>
                  <Row>
                    {isReadMore ? text.slice(0, 100) : text}
                    <p
                      onClick={toggleReadMore}
                      style={{
                        width: '150px',
                        color: '#86bc26',
                        paddingLeft: 0,
                        cursor: 'pointer',
                      }}
                    >
                      {isReadMore ? 'Read more' : ' Show less'}
                    </p>
                  </Row>
                  <Row>
                    <div className='social-links' style={{ padding: '0' }}>
                      <a href='/' style={{ marginRight: '20px' }}>
                        Share
                      </a>
                      <a href='https://www.facebook.com/'>
                        <FaFacebookF />
                      </a>
                      <a href='https://www.google.com/'>
                        <FaGoogle />
                      </a>
                      <a href='https://www.twitter.com/'>
                        <AiOutlineTwitter />
                      </a>
                      <a href='https://www.pinterest.com/'>
                        <FaPinterestP />
                      </a>
                    </div>
                  </Row>
                </Row>
              </Row>
            </div>
          </Col>
        </Row>
        <div className='tabs'>
          <input type='radio' id='tab-description' name='tabs' defaultChecked />
          <label htmlFor='tab-description'>Description</label>
          <div className='tab'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates in neque iure deleniti ipsam eos! Saepe repellat non
              animi repudiandae hic, corporis ex? Natus fugiat quasi iure neque
              molestiae at harum perspiciatis nesciunt, repellendus vero iusto
              maiores quos inventore culpa tempore magni quibusdam totam
              mollitia eveniet itaque doloribus? Eius, labore.
            </p>
          </div>

          <input type='radio' id='tab-additional-info' name='tabs' />
          <label htmlFor='tab-additional-info'>Additional Information</label>
          <div className='tab'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
              magnam inventore nisi quod ea error ex veniam! Possimus, iusto
              fugiat quaerat reprehenderit tenetur nostrum sequi, officiis
              perspiciatis, ut ad aut unde debitis veniam. Magnam dolorum quidem
              voluptatem! Maxime voluptatum, illo, consequatur ex esse,
              provident rerum perspiciatis quae enim molestiae cupiditate.
            </p>
          </div>

          <input type='radio' id='tab-review' name='tabs' />
          <label htmlFor='tab-review'>Reviews(3)</label>
          <div className='tab'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </Container>
      <div style={{ backgroundColor: '#262a32' }}>
        <Container>
          <FeaturedProductList />
        </Container>
      </div>
      <div
        style={{
          backgroundColor: '#45413e',
        }}
      >
        <Container>
          <Row>
            <Col
              sm={12}
              lg={4}
              style={{
                display: 'flex',
                justifyContent: 'left',
                paddingTop: '20px',
                height: '250px',
                backgroundColor: '#45413e',
              }}
            >
              <div className='col-2 mt-5'>
                <img src='../assets/Home/Benefits/1.png' alt='benefit' />
              </div>
              <div className='col-7 p-2'>
                <h5 className='mt-4' style={{ color: 'white' }}>
                  FOCUS
                </h5>
                <p className='text-muted'>
                  Our unwavering focus on superior service delivery and building
                  next generation competencies.
                </p>
              </div>
            </Col>
            <Col
              sm={12}
              lg={4}
              style={{
                display: 'flex',
                justifyContent: 'left',
                paddingTop: '20px',
                height: '250px',
                backgroundColor: '#45413e',
              }}
            >
              <div className='col-2 mt-5'>
                <img src='../assets/Home/Benefits/2.png' alt='benefit' />
              </div>
              <div className='col-7 p-2'>
                <h5 className='mt-4' style={{ color: 'white' }}>
                  METHOD
                </h5>
                <p className='text-muted'>
                  A standardized methodology designed to deliver measurable
                  business reults and predictable costs.
                </p>
              </div>
            </Col>
            <Col
              sm={12}
              lg={4}
              style={{
                display: 'flex',
                justifyContent: 'left',
                paddingTop: '20px',
                height: '250px',
                backgroundColor: '#45413e',
              }}
            >
              <div className='col-2 mt-5'>
                <img src='../assets/Home/Benefits/3.png' alt='benefit' />
              </div>
              <div className='col-7 p-2'>
                <h5 className='mt-4' style={{ color: 'white' }}>
                  KNOWLEDGE
                </h5>
                <p className='text-muted'>
                  A highly skilled, proactive workforce that reliably improves
                  each client's ROI while mitigating their business risk.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default ProductPage

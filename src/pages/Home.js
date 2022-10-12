import React from 'react'

import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'

import { Button, Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

import Image1 from '../assets/Home/Slider/slider_1.jpg'
import Image2 from '../assets/Home/Slider/slider_2.jpg'
import Image3 from '../assets/Home/Slider/slider_3.jpg'
import Sales from '../assets/Home/sales.jpg'

import { GrFacebookOption } from 'react-icons/gr'

import ProductList from '../components/ProductList'
import FeaturedProductList from '../components/FeaturedProductList'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  const moveToLandingPage = (e) => {
    e.preventDefault()
    navigate('/category')
  }

  return (
    <>
      <Container>
        <Row>
          <Col sm={9}>
            <Carousel style={{ marginTop: '25px' }}>
              <Carousel.Item>
                <img className='d-block w-100' src={Image1} alt='First slide' />
                <Carousel.Caption>
                  <h1>
                    Control and manage any <br /> device with cloud solutions
                  </h1>
                  <h3>
                    Improve business performance and the user experience <br />{' '}
                    with the right mix of IoT technology and processes
                  </h3>
                  <button
                    type='button'
                    className='btn btn-outline-light rounded-full border-2'
                    style={{ width: '150px', height: '40px' }}
                    onClick={moveToLandingPage}
                  >
                    <span className='text-sm mb-1' onClick={moveToLandingPage}>
                      VIEW MORE
                    </span>
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className='d-block w-100'
                  src={Image2}
                  alt='Second slide'
                />

                <Carousel.Caption>
                  <h1>
                    Control and manage any <br /> device with cloud solutions
                  </h1>
                  <h3>
                    Improve business performance and the user experience <br />{' '}
                    with the right mix of IoT technology and processes
                  </h3>
                  <button
                    type='button'
                    className='btn btn-outline-light rounded-full border-2'
                    style={{ width: '150px', height: '40px' }}
                    onClick={moveToLandingPage}
                  >
                    <span className='text-sm mb-1' onClick={moveToLandingPage}>
                      VIEW MORE
                    </span>
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className='d-block w-100' src={Image3} alt='Third slide' />

                <Carousel.Caption>
                  <h1>
                    Control and manage any <br /> device with cloud solutions
                  </h1>
                  <h3>
                    Improve business performance and the user experience <br />{' '}
                    with the right mix of IoT technology and processes
                  </h3>
                  <button
                    type='button'
                    className='btn btn-outline-light rounded-full border-2'
                    style={{ width: '150px', height: '40px' }}
                    onClick={moveToLandingPage}
                  >
                    <span className='text-sm mb-1' onClick={moveToLandingPage}>
                      VIEW MORE
                    </span>
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col sm={3}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginTop: '25px',
              }}
            >
              <Card className='text-center' border='0'>
                <Image
                  className='d-block w-100'
                  src={Sales}
                  alt='Third slide'
                  rounded='true'
                />
                <Card.Body>
                  <Card.Title>Follow us on Facebook</Card.Title>
                  <Card.Text>
                    Send ut perspiciatis unde omnis iste natus error sit
                  </Card.Text>
                  <Button
                    variant='outline-primary'
                    style={{
                      width: '150px',
                      height: '40px',
                      borderRadius: '20px',
                    }}
                  >
                    <GrFacebookOption />
                    <span>FOLLOW</span>
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>
      <div style={{ backgroundColor: '#262a32' }}>
        <Container>
          <div id='popular-items' className='row'>
            <div className='container-fluid d-flex flex-column'>
              <hr className='hr-custom' />
              <h3>Popular Items</h3>
            </div>
          </div>
          <ProductList />
        </Container>
        <div id='banner' className='row d-flex'>
          <h1 className='mx-auto mt-5 px-3'>Banner OSF Theme</h1>
          <p className='mx-auto mt-3 px-5'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
            placeat repudiandae, <br />
            laborum praesentium alias sit maet consectetur sit amet
          </p>
        </div>
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
                <img src='./assets/Home/Benefits/1.png' alt='benefit' />
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
                <img src='./assets/Home/Benefits/2.png' alt='benefit' />
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
                <img src='./assets/Home/Benefits/3.png' alt='benefit' />
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
    </>
  )
}

export default Home

import React from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Image1 from '../assets/NotFound/notfound.jpg'
import { ReactComponent as Search } from '../assets/Header/Search.svg'
import { Link, useNavigate } from 'react-router-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

function NotFound() {
  const navigate = useNavigate()

  const moveToHome = (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <Container className='mb-5'>
      <Breadcrumb className='d-flex flex-row justify-content-center align-items-center'>
        <Breadcrumb.Item onClick={moveToHome}>Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Not Found Page</Breadcrumb.Item>
      </Breadcrumb>
      <Row className='h-100'>
        <Col className='col-md-5'>
          <img className='d-block w-100' src={Image1} alt='First slide' />
        </Col>
        <Col className='col-md-7'>
          <h3 className='my-5 font-weight-bold'>
            Sorry, this page could not be found!
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            aliquam animi ullam ex dicta voluptates veritatis, officiis culpa
            rerum eveniet sint incidunt quaerat. Quam iure blanditiis soluta rem
            natus commodi quod labore sed delectus, impedit assumenda
            reprehenderit voluptate, quae provident.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nostrum
            repellat nulla possimus ipsa ut tempora assumenda debitis, ducimus
            aut, obcaecati iure quos, cupiditate tempore fugiat architecto
            libero illum veritatis?
          </p>
          <p>
            <Link to='/' className='login-forgot-password link-lemonado'>
              Go back to Homepage
            </Link>
          </p>
          <h3 className='my-5 font-weight-bold '>Search our site</h3>
          <form className='search'>
            <input type='text' placeholder='Search..' name='search' />
            <Search />
          </form>
        </Col>
      </Row>
    </Container>
  )
}

export default NotFound

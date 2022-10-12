import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'

import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Offcanvas from 'react-bootstrap/Offcanvas'

import Stack from 'react-bootstrap/Stack'

import { ReactComponent as Logo } from '../assets/Header/Logo.svg'
import { ReactComponent as Search } from '../assets/Header/Search.svg'
import { ReactComponent as ProfileUser } from '../assets/Header/Profile_User.svg'
import ImageRight from '../assets/Header/imageright.jpg'

import { useSelector } from 'react-redux'
import {
  selectAllFavourites,
  selectAllCart,
} from '../features/products/productsSlice'
import { Image } from 'react-bootstrap'

function Header() {
  const [showModal, setShowModal] = useState(false)
  const [showModalRegister, setShowModalRegister] = useState(false)

  const navigate = useNavigate()

  const handleCloseModal = (e) => {
    setShowModal(false)
  }

  const handleHome = (e) => {
    e.preventDefault()
    navigate('/')
  }

  const handleCloseModalAndHome = (e) => {
    e.preventDefault()
    handleCloseModal()
    navigate('/')
  }

  const handleShowModal = () => setShowModal(true)

  const handleChangeToRegister = (e) => {
    setShowModalRegister(!showModalRegister)
  }

  const handleToFavourites = (e) => {
    e.preventDefault()
    navigate('/favourites')
  }

  const handleToCart = (e) => {
    e.preventDefault()
    navigate('/cart')
  }

  const favouriteCount = useSelector((state) => selectAllFavourites(state))
  const cart = useSelector((state) => selectAllCart(state))

  const cartElementsCount = cart.reduce((price, product) => {
    return price + product.count
  }, 0)

  return (
    <>
      <Navbar key='lg' bg='white' expand='lg'>
        <Container>
          <Navbar.Brand onClick={handleHome}>
            <div className='d-flex flex-row'>
              <div className='brand-logo'>
                <Logo />
              </div>
              <div className='brand-name'>
                <span>O</span>
                <span>S</span>
                <span>F</span>
                <p>Academy</p>
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Info
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-center flex-grow-1 pe-5'>
                <div className='container'>
                  <div className='row v-center'>
                    <div className='header-item item-left'></div>
                    <div className='header-item item-center'>
                      <div className='menu-overlay'></div>
                      <nav className='menu'>
                        <div className='mobile-menu-head'>
                          <div className='current-menu-title'></div>
                        </div>
                        <ul
                          className='menu-main'
                          style={{ marginBottom: '0px' }}
                        >
                          <li className='menu-item-has-children'>
                            <Link to='/notfound'>
                              SERVICES <i className='fa-solid fa-sort-down'></i>
                            </Link>
                            <div className='sub-menu mega-menu mega-menu-column-4 single-column-menu'>
                              <div className='list-item'>
                                <h4 className='title'>PRODUCT CATEGORIES</h4>
                                <ul>
                                  <li>
                                    <Link to='/notfound'>Accessories</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Alcohol</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Art</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Books</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Drink</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Electronics</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Flowers & Plants</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Food</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className='list-item'>
                                <ul>
                                  <li>
                                    <Link to='/notfound'>Gadgets</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Garden</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Grocery</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Home</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Jewelery</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Kids & Baby</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Men's Fashion</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Mobile</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className='list-item'>
                                <ul>
                                  <li>
                                    <Link to='/notfound'>Motorcycles</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Movies</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Music</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Office</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Pets</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Romantic</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Sport</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Toys</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className='list-item'>
                                <h4 className='title'>SALE</h4>
                                <ul>
                                  <li>
                                    <Link to='/notfound'>Accessories</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Alcohol</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Art</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Books</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Drink</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Electronics</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Flowers & Plants</Link>
                                  </li>
                                  <li>
                                    <Link to='/notfound'>Food</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className='list-item'>
                                <Image src={ImageRight} alt='hello' />
                              </div>
                            </div>
                          </li>
                          <li>
                            <Link to='/notfound'>COMPANY</Link>
                          </li>
                          <li>
                            <Link to='/notfound'>LIBRARY</Link>
                          </li>
                          <li>
                            <Link to='/notfound'>CONTACT US</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>

                <NavDropdown title={<span>EN</span>}>
                  <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span>$US</span>}>
                  <NavDropdown.Item href='#action3'>Action</NavDropdown.Item>
                  <NavDropdown.Item href='#action4'>
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='#action5'>
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <Nav className='me-auto'>
                <Stack direction='horizontal' gap={3}>
                  <Nav.Link>
                    <Search />
                  </Nav.Link>

                  <Nav.Link onClick={handleShowModal}>
                    <ProfileUser />
                  </Nav.Link>

                  <Nav.Link onClick={handleToFavourites}>
                    <div className='likeIcon'>
                      <span>{favouriteCount.length}</span>
                    </div>
                  </Nav.Link>

                  <Nav.Link onClick={handleToCart}>
                    <div className='bagIcon'>
                      <span>{cartElementsCount}</span>
                    </div>
                  </Nav.Link>
                </Stack>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div>
        {' '}
        <></>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        {!showModalRegister ? (
          <Form className='text-center p-5'>
            <h1 className='mb-5 fs-3'>Sign in</h1>
            <div className='text-start'>email</div>
            <Form.Group controlId='sign-in-email-address'>
              <Form.Control
                type='email'
                size='lg'
                autoComplete='username'
                className='position-relative mt-1 mb-4'
              />
            </Form.Group>
            <Stack direction='horizontal' gap={4}>
              <div>password</div>
              <div className='ms-auto'>
                <Link
                  to='/404'
                  className='login-forgot-password link-lemonado'
                  onClick={handleCloseModal}
                >
                  forgot password
                </Link>
              </div>
            </Stack>
            <Form.Group className='mb-3' controlId='sign-in-password'>
              <Form.Control
                type='password'
                size='lg'
                autoComplete='current-password'
                className='position-relative mt-1 mb-2'
              />
            </Form.Group>
            <Button
              type='primary'
              size='large'
              htmltype='submit'
              className='login-form-button mt-3'
              onClick={handleCloseModalAndHome}
            >
              LOGIN
            </Button>
            <div className='mt-3 mb-2'>
              <Form.Text
                className='login-forgot-password link-lemonado'
                onClick={handleChangeToRegister}
                style={{ cursor: 'pointer' }}
              >
                I don't have an account
              </Form.Text>
            </div>
          </Form>
        ) : (
          <Form className='text-center p-5'>
            <h1 className='mb-5 fs-3'>Register</h1>
            <div className='text-start'>email</div>
            <Form.Group controlId='sign-in-email-address'>
              <Form.Control
                type='email'
                size='lg'
                autoComplete='username'
                className='position-relative mt-1 mb-4'
              />
            </Form.Group>
            <div className='text-start'>password</div>
            <Form.Group className='mb-3' controlId='sign-in-password'>
              <Form.Control
                type='password'
                size='lg'
                autoComplete='current-password'
                className='position-relative mt-1 mb-2'
              />
            </Form.Group>
            <div className='text-start'>confirm password</div>
            <Form.Group className='mb-3' controlId='sign-in-password'>
              <Form.Control
                type='password'
                size='lg'
                autoComplete='current-password'
                className='position-relative mt-1 mb-2'
              />
            </Form.Group>
            <Button
              type='primary'
              size='large'
              htmltype='submit'
              className='login-form-button mt-3'
              onClick={handleCloseModalAndHome}
            >
              REGISTER
            </Button>
            <div className='mt-3 mb-2'>
              <Form.Text
                className='login-forgot-password link-lemonado'
                onClick={handleChangeToRegister}
                style={{ cursor: 'pointer' }}
              >
                Already have an account?
              </Form.Text>
            </div>
          </Form>
        )}
      </Modal>
    </>
  )
}

export default Header

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { FaFacebookF, FaGoogle, FaPinterestP } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const [isActive] = useState(false)
  return (
    <Container>
      <Row>
        <Col className='footer-col'>
          <p>&copy; Copyright 2022</p>
          <p>All Rights Reserved.</p>
          <h4>CONTACT</h4>
          <p>
            Headquarters: 5600, Blvd. des Galeries, Bur 530 Quebec, Quebec G2K
            2H6
          </p>
          <p>
            <a href='mailto:someone@example.com'>contact@osf-global.com</a>
          </p>
          <p>
            <a href='tel:+1 (888) 548 4344'>+1 (888) 548 4344</a>
          </p>
        </Col>
        <Col className='footer-col'>
          <h4>CATEGORIES</h4>
          {/* <button onClick={() => setIsActive(!isActive)}>dropdown</button> */}
          <ul>
            <li style={{ display: isActive ? 'block' : 'none' }}>
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
          </ul>
        </Col>
        <Col className='footer-col'>
          <ul>
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
            <li>
              <Link to='/notfound'>Motorcycle</Link>
            </li>
            <li>
              <Link to='/notfound'>Movies</Link>
            </li>
            <li>
              <Link to='/notfound'>Music</Link>
            </li>
          </ul>
        </Col>
        <Col className='footer-col'>
          <ul>
            <li>
              <Link to='/notfound'>Sports</Link>
            </li>
            <li>
              <Link to='/notfound'>Toys</Link>
            </li>
            <li>
              <Link to='/notfound'>Travel</Link>
            </li>
            <li>
              <Link to='/notfound'>Women's Fashion</Link>
            </li>
          </ul>
        </Col>
        <Col className='footer-col'>
          <h4>ABOUT</h4>
          <ul>
            <li>
              <Link to='/notfound'>About us</Link>
            </li>
            <li>
              <Link to='/notfound'>Delivery</Link>
            </li>
            <li>
              <Link to='/notfound'>Testimonials</Link>
            </li>
            <li>
              <Link to='/notfound'>Contact</Link>
            </li>
          </ul>
        </Col>
        <Col className='footer-col'>
          <div className='social-links'>
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
        </Col>
      </Row>
    </Container>
  )
}

export default Footer

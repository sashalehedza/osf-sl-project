import React from 'react'

import { useNavigate } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

import ProductList from '../components/ProductList'
import FeaturedProductList from '../components/FeaturedProductList'

function CategoryLandingPage() {
  const navigate = useNavigate()
  const moveToHome = (e) => {
    e.preventDefault()
    navigate('/')
  }
  return (
    <div style={{ backgroundColor: '#e3dccb' }}>
      <Container>
        <Breadcrumb
          className='d-flex flex-row justify-content-center align-items-center'
          style={{ paddingTop: '50px' }}
        >
          <Breadcrumb.Item onClick={moveToHome}>Home</Breadcrumb.Item>
          <Breadcrumb.Item active>Category Landing Services</Breadcrumb.Item>
        </Breadcrumb>
        <div id='services-title' className='row'>
          <div className='container-fluid d-flex flex-column'>
            <hr className='hr-custom-2' />
            <h3>Services</h3>
          </div>
        </div>
        <Container style={{ backgroundColor: 'white' }}>
          <div className='services-selects'>
            <div className='row'>
              <div className='col-md-4 col-sm-12 select-section'>
                <label htmlFor='price'>Price</label>
                <select name='price' id='price'>
                  <option value='zero'>$0.00 - $100.00</option>
                  <option value='hundred'>$100.00 - 500.00</option>
                  <option value='five-hundred'>$500.00 - $1000.00</option>
                  <option value='thousand'>$1000.00 - $10000.00</option>
                </select>
              </div>
              <div className='col-md-4 col-sm-12 select-section'>
                <label htmlFor='brands'>Brands</label>
                <select name='brands' id='brands'>
                  <option value='nike'>Nike</option>
                  <option value='adidas'>Adidas</option>
                  <option value='puma'>Puma</option>
                  <option value='slazenger'>Slazenger</option>
                </select>
              </div>
              <div className='col-md-4 col-sm-12 select-section'>
                <label htmlFor='size'>Size</label>
                <select name='size' id='size'>
                  <option value='small'>Small</option>
                  <option value='medium'>Medium</option>
                  <option value='large'>Large</option>
                  <option value='extra-large'>Extra Large</option>
                </select>
              </div>
            </div>

            <div className='row' style={{ marginBottom: '40px' }}>
              <div className='col-md-4 col-sm-12 select-section color-section'>
                <label htmlFor='color'>Color</label>
                <ul className='colors'>
                  <li className='color-item' id='white'></li>
                  <li className='color-item' id='turqoise'></li>
                  <li className='color-item' id='black'></li>
                  <li className='color-item' id='green'></li>
                  <li className='color-item' id='blue'></li>
                  <li className='color-item' id='orange'></li>
                  <li className='color-item' id='red'></li>
                  <li className='color-item' id='grey'></li>
                </ul>
              </div>
              <div className='col-md-4 col-sm-12 select-section'>
                <label htmlFor='sort-by'>Sort by</label>
                <select name='sort-by' id='sort-by'>
                  <option value='price'>Price</option>
                  <option value='alphabetically'>Alphabetically</option>
                  <option value='release-date'>Release Date</option>
                  <option value='discount'>Discount</option>
                </select>
              </div>
              <div className='col-md-4 col-sm-12 select-section'>
                <label htmlFor='show'>Show</label>
                <select name='show' id='show'>
                  <option value='sixteen'>16 per page</option>
                  <option value='eight'>8 per page</option>
                  <option value='twenty-four'>24 per page</option>
                  <option value='thirty-two'>32 per page</option>
                </select>
              </div>
            </div>
          </div>
        </Container>
      </Container>
      <div style={{ backgroundColor: '#e3dccb' }}>
        <div className='text-center' style={{ marginBottom: '30px' }}>
          <h5>12345 results</h5>
        </div>

        <Container>
          <ProductList />
        </Container>
      </div>
      <div style={{ backgroundColor: '#262a32' }}>
        <Container>
          <FeaturedProductList />
        </Container>
      </div>
    </div>
  )
}

export default CategoryLandingPage

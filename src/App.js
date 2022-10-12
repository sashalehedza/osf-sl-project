import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import CartPage from './pages/CartPage'
import CategoryLandingPage from './pages/CategoryLandingPage'
import FavouritesPage from './pages/FavouritesPage'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import ProductPage from './pages/ProductPage'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />

            <Route path='product'>
              <Route index element={<NotFound />} />
              <Route path=':productId' element={<ProductPage />} />
            </Route>

            <Route path='favourites'>
              <Route index element={<FavouritesPage />} />
            </Route>

            <Route path='cart'>
              <Route index element={<CartPage />} />
            </Route>

            <Route path='category'>
              <Route index element={<CategoryLandingPage />} />
            </Route>

            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

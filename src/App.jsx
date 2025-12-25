import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import CheckOut from './components/CheckOut'
import CartDetails from './components/CartDetails'
import ProductDetails from './components/ProductDetails'
import PageNotFound from './components/PageNotFound'
import Login from './components/Login'
import Layout from './components/Layout/Layout'
import { ToastContainer, toast } from 'react-toastify'

function App() {
  return (
    <>
     <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />} >
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cart-details" element={<CartDetails />} />
          <Route path="/product-details" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
export default App

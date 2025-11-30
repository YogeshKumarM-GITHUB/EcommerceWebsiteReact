import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import CheckOut from './components/CheckOut'
import CartDetails from './components/CartDetails'

function App() {
  return (
    <>
      <NavBar />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/cart-details" element={<CartDetails />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App

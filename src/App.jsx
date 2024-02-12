import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Home, Login, NavBar, Products } from "./scenes"
import { products } from "./constants/data"

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [user, setUser] = useState('stranger')
  
  const handleLogin = () => {
    console.log('log in');
  }
  
  return (
    <div className="px-2">
      <NavBar {...{user, isLoggedIn, setisLoggedIn}} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home {...isLoggedIn} />} />
          <Route path="/login" element={<Login isLoggedIn={isLoggedIn} />} />
          <Route path="/products" element={<Products products={products} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
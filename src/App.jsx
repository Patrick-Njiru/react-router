import { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import { Home, Login, NavBar, Products } from "./scenes"
import { products } from "./constants/data"
import { useNavigate } from "react-router-dom"

const App = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false)
  const [user, setUser] = useState('stranger')
  const [displayProducts, setdisplayproducts] = useState(false)
  const nav = useNavigate()
  
  useEffect(() => {
    setdisplayproducts(prevState => isLoggedIn ? !prevState : prevState )
  }, [isLoggedIn])

  const handleLogin = (val) => { setUser(val); setisLoggedIn(true); nav('/products') }
  
  return (
    <div className="px-2">
      <NavBar {...{user, isLoggedIn, setisLoggedIn, setUser, displayProducts}} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home {...{ isLoggedIn }} />} />
          <Route path="/login" element={<Login onLogIn={handleLogin} />} />
          <Route path="/products" element={<Products products={products} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
import { useEffect, useReducer } from "react"
import { Route, Routes } from "react-router-dom"
import { Home, Login, NavBar, Products } from "./scenes"
import { products } from "./constants/data"
import { reducer } from "./functions/reducer"

const defaultState = {
  isLoggedIn: false,
  user: 'stranger',
  displayProducts: false,
  isModalOpen: false,
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)
  
  useEffect(() => {
    if (state.isModalOpen) {
      setTimeout(() => {
        dispatch({type: 'CLOSE_MODAL'})
      }, 4000)
    }
  })
  
  return (
    <div className="px-2">
      <NavBar dispatch={dispatch} {...state} />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home isLoggedIn={state.isLoggedIn} />} />
          <Route path="/login" element={<Login dispatch={dispatch} isModalOpen={state.isModalOpen} />} />
          <Route path="/products" element={<Products products={products} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
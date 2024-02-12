import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import './navbar.css'

const NavBar = ({ isLoggedIn, user, displayProducts, dispatch }) => (
  <nav className="navbar bg-dark text-light w-100">
    <div className="container">
      <h5 className="my-auto">
        Welcome
        <span className='badge ms-2 bg-danger rounded-pill text-capitalize'>{user}</span>
      </h5>
      <div className="ms-auto my-3 d-flex align-items-center">
        <NavLink className='text-decoration-none mx-2' to='/'>Home</NavLink>
        { displayProducts && <NavLink className='text-decoration-none' to='/products'>Products</NavLink> }
        <NavLink
          className='text-decoration-none mx-2'
          to='/login'
          onClick={() => { isLoggedIn? dispatch({type: 'LOG_OUT'}) : null }}
        >
          <button className='btn btn-primary ms-2'> {isLoggedIn ? 'Log Out' : 'Log In'} </button>
        </NavLink>
      </div>
    </div>
  </nav>
)

NavBar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  user: PropTypes.string.isRequired,
  displayProducts: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

export default NavBar
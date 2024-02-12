import { NavLink } from "react-router-dom"
import PropTypes from 'prop-types'

const Home = ({isLoggedIn}) => {
  return (
    <div className="h1 my-5 pt-5">
      <p className="alert alert-info p-5">
        Welcome to Naimart Store where you can shop from the convenience of your home and have products delivered to you at an affordable price.
      </p>
      <div className="text-center">
        <NavLink
          to={`${isLoggedIn ? '/products' : '/login'}`}
          className="btn btn-danger btn-lg"
        >
          Get started
        </NavLink>
      </div>
    </div>
  )
}

Home.propTypes = { isLoggedIn: PropTypes.bool.isRequired }

export default Home
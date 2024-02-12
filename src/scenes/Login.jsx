import { useRef } from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import Modal from '../components/Modal'

const Login = ({dispatch, isModalOpen}) => {
  const refContainer = useRef('')
  const nav = useNavigate()
  
  return (
    <div className='m-5 p-5 w-75' style={{ minWidth: 300 }}>
      {isModalOpen && <Modal />}
      <form
        className='form bg-secondary rounded-pill p-5'
        onSubmit={(e) => {
          e.preventDefault()
          dispatch({ type: 'LOG_IN', payload: refContainer.current.value })
          nav('/products')
        }}
      >
        <div className="form-floating mb-2">
          <input
            type="text"
            name="username"
            id="username"
            className="form-control"
            placeholder='john doe'
            ref={refContainer}
            required
            minLength='3'
          />
          <label htmlFor="username" className="form-label w-100 text-center">username</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            name="password"
            id="password"
            className="form-control"
            placeholder='xxxxxx'
            required
            minLength='6'
          />
          <label htmlFor="password" className="form-label w-100 text-center">password</label>
        </div>
        <button type="submit" className="btn btn-primary d-block mx-auto mt-4">Log In</button>
      </form>
    </div>
  )
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired
}

export default Login
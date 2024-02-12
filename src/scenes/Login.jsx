import { useRef } from 'react'
import PropTypes from 'prop-types'

const Login = ({onLogIn}) => {
  const refContainer = useRef('')
  
  return (
    <div className='m-5 p-5 w-75' style={{minWidth: 300}}>
      <form className='form bg-secondary rounded-pill p-5' onSubmit={() => onLogIn(refContainer.current.value)}>
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

Login.propTypes = { onLogIn: PropTypes.func.isRequired }

export default Login
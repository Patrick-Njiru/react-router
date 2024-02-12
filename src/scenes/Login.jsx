import React, { useRef } from 'react'
import PropTypes from 'prop-types'

const Login = props => {
  const refContainer = useRef('')
  return (
    <div>
      <form>
        <div className="form-floating">
          <input type="text" name="username" id="username" className="form-control" placeholder='john doe' ref={refContainer} />
          <label htmlFor="username" className="form-label">username</label>
        </div>
        <div className="form-floating">
          <input type="password" name="password" id="password" className="form-control" placeholder='john doe' />
          <label htmlFor="password" className="form-label">password</label>
        </div>
        <button type="submit" className="btn btn primary">Log In</button>
      </form>
    </div>
  )
}

Login.propTypes = {}

export default Login
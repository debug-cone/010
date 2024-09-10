import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import HomePage from './HomePage'

function ErrorPage() {
  return (
    <div>
        <h2>An Error occured!</h2>
        <Link to='/'>Go back to Home Page</Link>
    </div>
  )
}

export default ErrorPage
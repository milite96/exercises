import React from 'react'
import { Link } from 'react-router-dom'

function Error404() {
  return (
    <div>
    <p>Error404 Route not found</p>
    <Link to={"/"}>
        Home!
    </Link>
    </div>
  )
}

export default Error404
/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Sidebar from '../../components/Sidebar'

export default function navbar() {
  return (
    <div>
    <div className='doc_wrapper'>
      <Sidebar active={'navbar'} />
      <div>
      <div>
      <h1>Navbar</h1>
            <img className='image' src="/images/docs/Navbar.png" alt="" />
                <h2>Login</h2>
                    <div>Login if you already have a username and password</div>
                <h2>Register</h2>
                    <div>Register if you do not yet have an account</div>
      </div>
      </div>
  </div>

  </div>
  )
}

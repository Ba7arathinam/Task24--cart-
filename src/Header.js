import React from 'react'
import './header.css'

function Header() {
  return (
    <div className='header'>
        <div className='p-3'>
            <h1>
                ReactJS Shooping Cart
            </h1>
        </div>

        <nav>
            <a href="/">Home</a>
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/profile">Profile</a>
        </nav>
    </div>
  )
}

export default Header
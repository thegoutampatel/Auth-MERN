import React from 'react'
import './header.css'
import Avatar from '@mui/material/Avatar';
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <h1>Auth</h1>
          <div className="avtar">
            <Avatar>G</Avatar>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
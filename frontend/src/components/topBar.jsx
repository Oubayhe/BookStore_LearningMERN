import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <header>
        <h1>MyBook</h1>
        <ul>
            <Link to="/books">
                <li>Books</li>
            </Link>
            <Link to="/categories">
                <li>Categories</li>
            </Link>
            <Link to="/favorites">
                <li>Favorites</li>
            </Link>
            <Link to="/create">
                <li>New Book</li>
            </Link>
        </ul>
    </header>
  )
}

export default TopBar

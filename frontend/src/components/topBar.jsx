import React from 'react'
import { Link } from 'react-router-dom'

const TopBar = () => {
  return (
    <div className="top-bar">
        <header>
            <div className='mybook'>MyBook</div>
            <ul>
                <Link to="books">
                    <li>Books</li>
                </Link>
                <Link to="categories">
                    <li>Categories</li>
                </Link>
                <Link to="favorites">
                    <li>Favorites</li>
                </Link>
                <Link to="create">
                    <li>New Book</li>
                </Link>
            </ul>
        </header>
    </div>

  )
}

export default TopBar

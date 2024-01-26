import React from 'react'
import { Link } from 'react-router-dom'

const DisplayBook = ({ book }) => {
    
  return (
    <Link to={`/books/${book._id}`}>
        <div className='display-book'>
            <div className='image'>
                <img src={`${book.image}`} alt='booki_mage' />
            </div>
            <h2>{book.title}</h2>
            <div className='book-snippet'>
                {book.snippet}
            </div>
        </div>
    </Link>
  )
}

export default DisplayBook

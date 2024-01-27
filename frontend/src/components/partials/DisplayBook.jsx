import React from 'react'
import { Link } from 'react-router-dom'

const DisplayBook = ({ book, deleteBook }) => {

    
    
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
            <div className='buttons'>
                <button onClick={() => {deleteBook(book._id)}}>Delete</button>
                <button>Update</button>
            </div>
        </div>
    </Link>
  )
}

export default DisplayBook

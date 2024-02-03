import React from 'react'
import { Link } from 'react-router-dom'

const DisplayBook = ({ book, deleteBook }) => {

    
    
  return (
    <div className='oneBook-card'>
        <Link to={`/books/${book._id}`}>
            <div className='display-book'>
                <div className='image'>
                    <img src={`${book.image}`} alt='booki_mage' />
                </div>
                <div className='onebook-information'>
                    <h2>{book.title}</h2>
                    <div className='book-snippet'>
                        {book.snippet}
                    </div>
                </div>
            </div>
        </Link>
        <div className='buttons'>
            <button onClick={() => {deleteBook(book._id)}}>Delete</button>
            <Link to={`update/${book._id}`}>
                <button>Update</button>
            </Link>
        </div>
    </div>
  )
}

export default DisplayBook

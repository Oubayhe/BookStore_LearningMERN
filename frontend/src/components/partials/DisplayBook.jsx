import React from 'react'
import { Link } from 'react-router-dom'
// import { CiEdit } from "react-icons/ci";
// import { FaRegTrashCan } from "react-icons/fa6";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-solid-svg-icons'




const DisplayBook = ({ book, deleteBook }) => {

    
    
  return (
    <div className='oneBook-card'>
        <Link to={`/books/${book._id}`} className='link-style'>
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
            <Link to={`update/${book._id}`} className='link-style'>
                <button><FontAwesomeIcon icon={faPenToSquare} /></button>
            </Link>
            <button onClick={() => {deleteBook(book._id)}}>
                <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </div>
    </div>
  )
}

export default DisplayBook

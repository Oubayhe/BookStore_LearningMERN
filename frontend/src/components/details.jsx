import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Details = () => {
    // In here we need to fitch the informations about that book
    const { id } = useParams()
    const [book, setBook] = useState([])
    
    useEffect(() => {
        fetch(`/books/${id}`).then(
            res => res.json()
        ).then(data => { setBook(data) })
    }, [id])

  return (
    <div className='book-details'>
        {/* Conditionally render the image only when book.image exists */}
        {book.image && (
            <div className='image'>
                <img src={book.image} alt='book_image' />
            </div>
        )}
        <h2 className='book-title'>{book.title}</h2>
        <div className='book-content'>{book.body}</div>
    </div>
  )
}

export default Details
